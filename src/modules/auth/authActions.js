import selectors from 'modules/auth/authSelectors';
import service from 'modules/auth/authService';
import Errors from 'modules/shared/error/errors';
import Message from 'view/shared/message';
import { i18n } from 'i18n';
import { getHistory } from 'modules/store';
import { AuthToken } from 'modules/auth/authToken';
// import employeeService from 'modules/employees/EmployeesService';
import menuAction from 'modules/menu/menuActions'

const prefix = 'AUTH';

const actions = {
  SWITCH_TO_SIGNIN_PAGE: `${prefix}_SWITCH_TO_SIGNIN_PAGE`,

  ERROR_MESSAGE_CLEARED: `${prefix}_ERROR_MESSAGE_CLEARED`,

  AUTH_INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  AUTH_INIT_ERROR: `${prefix}_INIT_ERROR`,

  AUTH_START: `${prefix}_START`,
  AUTH_SUCCESS: `${prefix}_SUCCESS`,
  AUTH_ERROR: `${prefix}_ERROR`,

  UPDATE_PROFILE_START: `${prefix}_UPDATE_PROFILE_START`,
  UPDATE_PROFILE_SUCCESS: `${prefix}_UPDATE_PROFILE_SUCCESS`,
  UPDATE_PROFILE_ERROR: `${prefix}_UPDATE_PROFILE_ERROR`,

  VERIFY_CODE_START: `${prefix}_VERIFY_CODE_START`,
  VERIFY_CODE_SUCCESS: `${prefix}_VERIFY_CODE_SUCCESS`,
  VERIFY_CODE_ERROR: `${prefix}_VERIFY_CODE_ERROR`,

  RESEND_CODE_START: `${prefix}_RESEND_CODE_START`,
  RESEND_CODE_SUCCESS: `${prefix}_RESEND_CODE_SUCCESS`,
  RESEND_CODE_ERROR: `${prefix}_RESEND_CODE_ERROR`,

  CURRENT_USER_REFRESH_START: `${prefix}_CURRENT_USER_REFRESH_START`,
  CURRENT_USER_REFRESH_SUCCESS: `${prefix}_CURRENT_USER_REFRESH_SUCCESS`,
  CURRENT_USER_REFRESH_ERROR: `${prefix}_CURRENT_USER_REFRESH_ERROR`,

  PASSWORD_RESET_EMAIL_START: `${prefix}_PASSWORD_RESET_EMAIL_START`,
  PASSWORD_RESET_EMAIL_SUCCESS: `${prefix}_PASSWORD_RESET_EMAIL_SUCCESS`,
  PASSWORD_RESET_EMAIL_ERROR: `${prefix}_PASSWORD_RESET_EMAIL_ERROR`,

  PASSWORD_RESET_START: `${prefix}_PASSWORD_RESET_START`,
  PASSWORD_RESET_SUCCESS: `${prefix}_PASSWORD_RESET_SUCCESS`,
  PASSWORD_RESET_ERROR: `${prefix}_PASSWORD_RESET_ERROR`,

  EMAIL_VERIFY_START: `${prefix}_EMAIL_VERIFY_START`,
  EMAIL_VERIFY_SUCCESS: `${prefix}_EMAIL_VERIFY_SUCCESS`,
  EMAIL_VERIFY_ERROR: `${prefix}_EMAIL_VERIFY_ERROR`,

  EMAIL_CONFIRMATION_START: `${prefix}_EMAIL_CONFIRMATION_START`,
  EMAIL_CONFIRMATION_SUCCESS: `${prefix}_EMAIL_CONFIRMATION_SUCCESS`,
  EMAIL_CONFIRMATION_ERROR: `${prefix}_EMAIL_CONFIRMATION_ERROR`,

  SIGNUP_VERIFY_ORGPREFIX_SUCCESS:
    `${prefix}_SIGNUP_VERIFY_ORGPREFIX_SUCCESS`,
  SIGNUP_VERIFY_ORGPREFIX_FAIL:
    `${prefix}_SIGNUP_VERIFY_ORGPREFIX_FAIL`,

  SIGNUP_FETCHORGANIZATIONPLANTS_SUCCESS:
    `${prefix}_SIGNUP_FETCHORGANIZATIONPLANTS_SUCCESS`,

  SIGNUP_HANDLEORGPREFIXCHANGE_SUCCESS:
    `${prefix}_SIGNUP_HANDLEORGPREFIXCHANGE_SUCCESS`,
  SIGNUP_HANDLEPLANTSELECTCHANGE_SUCCESS:
    `${prefix}_SIGNUP_HANDLEPLANTSELECTCHANGE_SUCCESS`,

  SINGUP_VALIDATEEMPLOYEENUMBER_FAIL:
    `${prefix}_SINGUP_VALIDATEEMPLOYEENUMBER_FAIL`,
  SINGUP_VALIDATEORGANIZATION_FAIL:
    `${prefix}_SINGUP_VALIDATEORGANIZATION_FAIL`,

  ORGANIZATIONERROR_MESSAGE_CLEARED: `${prefix}_ORGANIZATIONERROR_MESSAGE_CLEARED`,
  ORGANIZATIONPLANTERROR_MESSAGE_CLEARED: `${prefix}_ORGANIZATIONPLANTERROR_MESSAGE_CLEARED`,
  EMPLOYEENUMBERERROR_MESSAGE_CLEARED: `${prefix}_EMPLOYEENUMBERERROR_MESSAGE_CLEARED`,

  ENABLE_2FA: `${prefix}_ENABLE_2FA`,

  doSwitchToSignInPage() {
    return {
      type: actions.SWITCH_TO_SIGNIN_PAGE
    }
  },

  doClearErrorMessage() {
    return {
      type: actions.ERROR_MESSAGE_CLEARED,
    };
  },
  doClearOrganizationErrorMessage() {
    return {
      type: actions.ORGANIZATIONERROR_MESSAGE_CLEARED,
    };
  },
  doClearOrganizationPlantErrorMessage() {
    return {
      type: actions.ORGANIZATIONPLANTERROR_MESSAGE_CLEARED,
    };
  },
  doClearEmployeeNumberErrorMessage() {
    return {
      type: actions.EMPLOYEENUMBERERROR_MESSAGE_CLEARED,
    };
  },
  doSendEmailConfirmation: () => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({ type: actions.EMAIL_CONFIRMATION_START });
      await service.sendEmailVerification(
        selectors.selectAuthenticationUser(getState()),
      );
      Message.success(
        i18n('entities.auth.verificationEmailSuccess'),
      );
      dispatch({
        type: actions.EMAIL_CONFIRMATION_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: actions.EMAIL_CONFIRMATION_ERROR });
    }
  },

  doSendPasswordResetEmail: (email) => async (dispatch) => {
    try {
      dispatch({
        type: actions.PASSWORD_RESET_EMAIL_START,
      });
      await service.sendPasswordResetEmail(email);
      Message.success(
        i18n('entities.auth.passwordResetEmailSuccess'),
      );
      dispatch({
        type: actions.PASSWORD_RESET_EMAIL_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: actions.PASSWORD_RESET_EMAIL_ERROR,
      });
    }
  },

  // doRegisterEmailAndPassword: (
  //   email,
  //   password,
  //   orgPlant,
  //   employeeNum,
  //   orgId,
  // ) => async (dispatch) => {
  //   try {
  //     dispatch({ type: actions.AUTH_START });
  //     if (
  //       typeof orgPlant === 'undefined' ||
  //       orgPlant === null ||
  //       orgPlant === ''
  //     ) {
  //       dispatch({
  //         type: actions.SIGNUP_VERIFY_ORGPREFIX_FAIL,
  //         payload: 'Select organization plant.',
  //       });
  //       return;
  //     }
  //     //verify employeeNum existing or not. and get employeeId.
  //     const employeeRes = await employeeService.findByEmployNumber(
  //       { orgId, orgPlantId: orgPlant, employeeNumber: employeeNum },
  //     );

  //     if (employeeRes.length === 0) {
  //       dispatch({
  //         type: actions.SINGUP_VALIDATEEMPLOYEENUMBER_FAIL,
  //         payload: 'Empoyee number does not exist.',
  //       });
  //     } else {
  //       const employeeId = employeeRes[0]['id'];
  //       const token = await service.registerWithEmailAndPassword(
  //         email,
  //         password,
  //         orgPlant,
  //         employeeId,
  //         orgId,
  //       );

  //       AuthToken.set(token, true);

  //       const currentUser = await service.fetchMe();

  //       //TODO save the current user to local storage so we can retrieve it from other pages for filtering
  //       sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

  //       dispatch({
  //         type: actions.AUTH_SUCCESS,
  //         payload: {
  //           currentUser,
  //         },
  //       });
  //     }
  //   } catch (error) {
  //     await service.signout();

  //     if (Errors.errorCode(error) !== 400) {
  //       Errors.handle(error);
  //     }

  //     dispatch({
  //       type: actions.AUTH_ERROR,
  //       payload: Errors.selectMessage(error),
  //     });
  //   }
  // },

  doVerifyCode: (code, rememberMe) => async (dispatch) => {
    try {
      dispatch({
        type: actions.VERIFY_CODE_START,
      });

      const token = await service.verifyCode(code);

      await AuthToken.set(token, rememberMe);

      const currentUser = await service.fetchMe();

      sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
      dispatch({
        type: actions.ENABLE_2FA,
        payload: null,
      });
      dispatch({
        type: actions.AUTH_SUCCESS,
        payload: {
          currentUser,
        },
      });
      dispatch({
        type: actions.VERIFY_CODE_SUCCESS,
      });
    } catch (error) {
      if (error?.response?.data) {
        if (error.response.data === "Token is invalid") Message.error(i18n('entities.auth.profile.tokenInvalid'));
        else if (error.response.data === "Validation Failed") Message.error(i18n('entities.auth.profile.validationFailed'));
        else Message.error(error.response.data);
      } else Message.error(i18n('entities.auth.profile.verifyCodeError'));
      dispatch({
        type: actions.VERIFY_CODE_ERROR,
      });
      if (Errors.errorCode(error) === 403) {
        dispatch({
          type: actions.ENABLE_2FA,
          payload: null,
        });
        dispatch({
          type: actions.AUTH_SUCCESS,
          payload: {
            currentUser: null,
          },
        });
        Errors.handle(error);
      }
    }
  },

  doResendCode: () => async (dispatch) => {
    try {
      dispatch({
        type: actions.RESEND_CODE_START,
      });
      await service.resendCode();
      Message.success(i18n('entities.auth.profile.resendCodeSuccess'));
      dispatch({
        type: actions.RESEND_CODE_SUCCESS,
      });
    } catch (error) {
      if (error) {
        if (error?.response?.data) {
          if (error.response.data === "Token is invalid") Message.error(i18n('entities.auth.profile.tokenInvalid'));
          else if (error.response.data === "Validation Failed") Message.error(i18n('entities.auth.profile.validationFailed'));
          else Message.error(error.response.data);
        } else Message.error(i18n('entities.auth.profile.resendCodeError'));
        dispatch({
          type: actions.RESEND_CODE_ERROR,
        });
      }
    }
  },

  doVerifyPhone: (code) => async (dispatch) => {
    try {
      dispatch({
        type: actions.VERIFY_CODE_START,
      });
      await service.verifyPhone(code);
      Message.success(i18n('entities.auth.profile.verifyCodeSuccess'));
      dispatch(actions.doRefreshCurrentUser());
      getHistory().push('/');
      dispatch({
        type: actions.ENABLE_2FA,
        payload: null,
      });
      dispatch({
        type: actions.VERIFY_CODE_SUCCESS,
      });
    } catch (error) {
      if (error?.response?.data) {
        if (error.response.data === "Token is invalid") Message.error(i18n('entities.auth.profile.tokenInvalid'));
        else if (error.response.data === "Validation Failed") Message.error(i18n('entities.auth.profile.validationFailed'));
        else Message.error(error.response.data);
      } else Message.error(i18n('entities.auth.profile.verifyCodeError'));
      dispatch({
        type: actions.VERIFY_CODE_ERROR,
      });
    }
  },

  doCancelVerifyCode: () => (dispatch) => {
    dispatch({
      type: actions.ENABLE_2FA,
      payload: null,
    });
  },

  doSigninWithEmailAndPassword: (
    email,
    password,
    rememberMe
  ) => async (dispatch) => {
    try {
      dispatch({ type: actions.AUTH_START });

      let currentUser = null;

      const { token, twoFactorEnabled, phoneNumber } = await service.signinWithEmailAndPassword(
        email,
        password,
      );

      if (twoFactorEnabled) {
        AuthToken.set(token, false);  //This is a temporary token to validate OTP

        dispatch({
          type: actions.ENABLE_2FA,
          payload: { value: true, mobile: phoneNumber },
        });
        // dispatch({
        //   type: actions.AUTH_SUCCESS,
        //   payload: {
        //     currentUser: null,
        //   },
        // });
      } else {
        AuthToken.set(token, rememberMe);

        currentUser = await service.fetchMe();

        //save the current user to local storage so we can retrieve it from other pages for filtering
        sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

        dispatch({
          type: actions.AUTH_SUCCESS,
          payload: {
            currentUser,
          },
        });
      }
    } catch (error) {
      await service.signout();

      if (Errors.errorCode(error) !== 400) {
        Errors.handle(error);
      }

      dispatch({
        type: actions.AUTH_ERROR,
        payload: Errors.selectMessage(error),
      });
    }
  },

  doSignout: () => async (dispatch) => {
    try {
      dispatch({ type: actions.AUTH_START });
      await service.signout();

      dispatch({
        type: actions.AUTH_SUCCESS,
        payload: {
          currentUser: null,
        },
      });

      dispatch(menuAction.doResetMenuState())
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.AUTH_ERROR,
      });
    }
  },

  doInit: () => async (dispatch) => {
    try {
      const token = await AuthToken.get();
      let currentUser = null;

      if (token) {
        currentUser = await service.fetchMe();
      }

      //TODO save the current user to local storage so we can retrieve it from other pages for filtering
      sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

      dispatch({
        type: actions.AUTH_INIT_SUCCESS,
        payload: {
          currentUser,
        },
      });
    } catch (error) {
      service.signout();
      Errors.handle(error);

      dispatch({
        type: actions.AUTH_INIT_ERROR,
        payload: error,
      });
    }
  },

  doRefreshCurrentUser: () => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: actions.CURRENT_USER_REFRESH_START,
      });

      let currentUser = null;
      const token = await AuthToken.get();

      if (token) {
        currentUser = await service.fetchMe();
      }

      //TODO save the current user to local storage so we can retrieve it from other pages for filtering
      sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

      dispatch({
        type: actions.CURRENT_USER_REFRESH_SUCCESS,
        payload: {
          currentUser,
        },
      });
    } catch (error) {
      service.signout();
      Errors.handle(error);

      dispatch({
        type: actions.CURRENT_USER_REFRESH_ERROR,
        payload: error,
      });
    }
  },

  doUpdateProfile: (
    firstName,
    lastName,
    countryCode,
    phoneNumber,
    avatars,
    twoFactorEnabled
  ) => async (dispatch) => {
    try {
      dispatch({
        type: actions.UPDATE_PROFILE_START,
      });

      const res = await service.updateProfile(
        firstName,
        lastName,
        countryCode,
        phoneNumber,
        avatars,
        twoFactorEnabled
      );
      dispatch({
        type: actions.UPDATE_PROFILE_SUCCESS,
      });
      dispatch(actions.doRefreshCurrentUser());
      Message.success(i18n('entities.auth.profile.success'));
      if (res.isMobileVerified) {
        getHistory().push('/');
      } else {
        dispatch({
          type: actions.ENABLE_2FA,
          payload: { value: true, mobile: phoneNumber },
        });
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.UPDATE_PROFILE_ERROR,
      });
    }
  },

  doVerifyEmail: (token) => async (dispatch) => {
    try {
      dispatch({
        type: actions.EMAIL_VERIFY_START,
      });

      await service.verifyEmail(token);

      dispatch(actions.doRefreshCurrentUser());
      Message.success(i18n('entities.auth.verifyEmail.success'));
      dispatch({
        type: actions.EMAIL_VERIFY_SUCCESS,
      });
      getHistory().push('/');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.EMAIL_VERIFY_ERROR,
      });
      dispatch(actions.doSignout());
      getHistory().push('/');
    }
  },

  doResetPassword: (token, password) => async (
    dispatch,
  ) => {
    try {
      dispatch({
        type: actions.PASSWORD_RESET_START,
      });

      await service.passwordReset(token, password);

      Message.success(i18n('entities.auth.passwordResetSuccess'));
      dispatch({
        type: actions.PASSWORD_RESET_SUCCESS,
      });
      getHistory().push('/');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: actions.PASSWORD_RESET_ERROR,
      });

      dispatch(actions.doSignout());
      getHistory().push('/');
    }
  },
  doFetchOrganization: (orgPrefix) => async (dispatch) => {
    let foundOrgPlants = [];
    try {
      if (orgPrefix === null || orgPrefix === '') {
        dispatch({
          type: actions.SINGUP_VALIDATEORGANIZATION_FAIL,
          payload: 'Please input organization.',
        });
      } else {
        const organization = await service.fetchOrganization(
          orgPrefix,
        );
        if (organization !== null && organization !== '') {
          dispatch({
            type: actions.SIGNUP_VERIFY_ORGPREFIX_SUCCESS,
            payload: { organization },
          });
          const foundOrgPlants = await service.fetchOrgPlants(
            organization.id,
          );
          dispatch({
            type:
              actions.SIGNUP_FETCHORGANIZATIONPLANTS_SUCCESS,
            payload: { foundOrgPlants },
          });
          //if no found plant then should dispatch error.
          if (
            foundOrgPlants === null ||
            foundOrgPlants.length === 0
          ) {
            dispatch({
              type: actions.SIGNUP_VERIFY_ORGPREFIX_FAIL,
              payload: 'Organization plants not found.',
            });
          }
        } else {
          //organization does not exist.
          //clear foundOrgPlant by dispatch next
          dispatch({
            type:
              actions.SIGNUP_FETCHORGANIZATIONPLANTS_SUCCESS,
            payload: { foundOrgPlants },
          });
          //dispatch organization not found.
          dispatch({
            type: actions.SINGUP_VALIDATEORGANIZATION_FAIL,
            payload: 'Organization does not exist.',
          });
        }
      }
    } catch (error) {
      //Errors.handle(error);
      dispatch({
        type: actions.SIGNUP_VERIFY_ORGPREFIX_FAIL,
        payload: error,
      });
    }
  },

  doFetchOrganizationPlants: () => async (dispatch) => {
    try {
      const foundOrgPlants = await service.fetchOrgPlants();
      dispatch({
        type:
          actions.SIGNUP_FETCHORGANIZATIONPLANTS_SUCCESS,
        payload: { foundOrgPlants },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: actions.SIGNUP_VERIFY_ORGPREFIX_FAIL,
        payload: error,
      });
    }
  },

  doHandleOrgPrefixChange: (orgPrefix) => async (
    dispatch,
  ) => {
    dispatch({
      type: actions.SIGNUP_HANDLEORGPREFIXCHANGE_SUCCESS,
      payload: { orgPrefix },
    });
  },

  doHandlePlantSelectChange: (plant) => async (
    dispatch,
  ) => {
    dispatch({
      type: actions.SIGNUP_HANDLEPLANTSELECTCHANGE_SUCCESS,
      payload: { plant },
    });
  },
};

export default actions;
