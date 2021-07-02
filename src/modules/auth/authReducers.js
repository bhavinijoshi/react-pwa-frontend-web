import actions from 'modules/auth/authActions';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import { i18n } from 'i18n';

// function enumeratorLabel(name, value) {
//   return value;
//   //return i18n(`entities.user.enumerators.${name}.${value}`);
// }
function label(name) {
  //return name;
  return i18n(`user.fields.${name}`);
}
const initialData = {
  currentUser: null,
  loadingInit: true,
  loadingEmailConfirmation: false,
  loadingPasswordResetEmail: false,
  loadingVerifyEmail: false,
  loadingPasswordReset: false,
  loadingUpdateProfile: false,
  loadingVerifyCode: false,
  loadingResendCode: false,
  loading: false,
  errorMessage: null,
  employeeNumberError: null,
  orgPlantNotFound: null,
  organizationNotExist: null,
  organization: null,
  plantDefaultValue: null,
  orgPlants: new EnumeratorField(
    'orgPlant',
    label('orgPlant'),
    [
      //{ id: 'Gerdau Cambridge', label: enumeratorLabel('orgPlant', 'Gerdau Cambridge') },
    ],
    {
      required: true,
    },
  ),
  //orgPlants: [
  //{ id: 'Gerdau Cambridge', label: enumeratorLabel('orgPlant', 'Gerdau Cambridge') },
  //],
  orgPrefix: '',
  twoFactorEnabled: null
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.SWITCH_TO_SIGNIN_PAGE) {
    return {
      ...state,
      errorMessage: null,
      loading: false,
      plantDefaultValue: null,
      orgPlants: new EnumeratorField(
        'orgPlant',
        label('orgPlant'),
        [],
        {
          required: true,
        },
      ),
    }
  }

  if (type === actions.ERROR_MESSAGE_CLEARED) {
    return {
      ...state,
      errorMessage: null,
    };
  }

  if (type === actions.CURRENT_USER_REFRESH_SUCCESS) {
    return {
      ...state,
      currentUser: payload.currentUser || null,
    };
  }

  if (type === actions.AUTH_START) {
    return {
      ...state,
      errorMessage: null,
      loading: true,
    };
  }

  if (type === actions.AUTH_SUCCESS) {
    return {
      ...state,
      currentUser: payload.currentUser || null,
      errorMessage: null,
      loading: false,
      plantDefaultValue: null,
      orgPlants: new EnumeratorField(
        'orgPlant',
        label('orgPlant'),
        [],
        {
          required: true,
        },
      ),
    };
  }

  if (type === actions.AUTH_ERROR) {
    return {
      ...state,
      currentUser: null,
      errorMessage: payload || null,
      loading: false,
    };
  }

  if (type === actions.ENABLE_2FA) {
    return {
      ...state,
      twoFactorEnabled: payload
    };
  }

  if (type === actions.EMAIL_CONFIRMATION_START) {
    return {
      ...state,
      loadingEmailConfirmation: true,
    };
  }

  if (type === actions.EMAIL_CONFIRMATION_SUCCESS) {
    return {
      ...state,
      loadingEmailConfirmation: false,
    };
  }

  if (type === actions.EMAIL_CONFIRMATION_ERROR) {
    return {
      ...state,
      loadingEmailConfirmation: false,
    };
  }

  if (type === actions.PASSWORD_RESET_EMAIL_START) {
    return {
      ...state,
      loadingPasswordResetEmail: true,
    };
  }

  if (type === actions.PASSWORD_RESET_EMAIL_SUCCESS) {
    return {
      ...state,
      loadingPasswordResetEmail: false,
    };
  }

  if (type === actions.PASSWORD_RESET_EMAIL_ERROR) {
    return {
      ...state,
      loadingPasswordResetEmail: false,
    };
  }

  if (type === actions.UPDATE_PROFILE_START) {
    return {
      ...state,
      loadingUpdateProfile: true,
    };
  }

  if (type === actions.UPDATE_PROFILE_SUCCESS) {
    return {
      ...state,
      loadingUpdateProfile: false,
    };
  }

  if (type === actions.UPDATE_PROFILE_ERROR) {
    return {
      ...state,
      loadingUpdateProfile: false,
    };
  }

  if (type === actions.VERIFY_CODE_START) {
    return {
      ...state,
      loadingVerifyCode: true,
    };
  }

  if (type === actions.VERIFY_CODE_SUCCESS) {
    return {
      ...state,
      loadingVerifyCode: false,
    };
  }

  if (type === actions.VERIFY_CODE_ERROR) {
    return {
      ...state,
      loadingVerifyCode: false,
    };
  }

  if (type === actions.RESEND_CODE_START) {
    return {
      ...state,
      loadingResendCode: true,
    };
  }

  if (type === actions.RESEND_CODE_SUCCESS) {
    return {
      ...state,
      loadingResendCode: false,
    };
  }

  if (type === actions.RESEND_CODE_ERROR) {
    return {
      ...state,
      loadingResendCode: false,
    };
  }

  if (type === actions.AUTH_INIT_SUCCESS) {
    return {
      ...state,
      currentUser: payload.currentUser || null,
      loadingInit: false,
    };
  }

  if (type === actions.AUTH_INIT_ERROR) {
    return {
      ...state,
      currentUser: null,
      loadingInit: false,
    };
  }
  //added for customize.
  if (type === actions.SIGNUP_VERIFY_ORGPREFIX_SUCCESS) {
    return {
      ...state,
      organization: payload.organization || null,
    };
  }
  if (
    type === actions.SIGNUP_FETCHORGANIZATIONPLANTS_SUCCESS
  ) {
    var options = payload.foundOrgPlants.map((v) => ({
      id: v.id,
      label: v.name,
    }));
    var defaultValue =
      options.length > 0
        ? { value: options[0].id, label: options[0].label }
        : null;
    var neworgPlants = new EnumeratorField(
      'orgPlant',
      label('orgPlant'),
      [],
      {
        required: true,
      },
    );

    neworgPlants.options = options;
    //payload.foundOrgPlants.map(op=>({id:i++.toString(),label:enumeratorLabel('orgPlant', op.name)}));
    return {
      ...state,
      plantDefaultValue: defaultValue,
      orgPlants: neworgPlants || null,
    };
  }

  if (type === actions.SIGNUP_VERIFY_ORGPREFIX_FAIL) {
    return {
      ...state,
      orgPlantNotFound: payload,
      loading: false,
    };
  }
  if (type === actions.SINGUP_VALIDATEORGANIZATION_FAIL) {
    return {
      ...state,
      organizationNotExist: payload,
      loading: false,
    };
  }
  if (
    type === actions.SIGNUP_HANDLEPLANTSELECTCHANGE_SUCCESS
  ) {
    return {
      ...state,
      plantDefaultValue: payload.plant || null,
    };
  }
  if (
    type === actions.SIGNUP_HANDLEORGPREFIXCHANGE_SUCCESS
  ) {
    return {
      ...state,
      orgPrefix: payload.orgPrefix || '',
    };
  }
  if (type === actions.SINGUP_VALIDATEEMPLOYEENUMBER_FAIL) {
    return {
      ...state,
      employeeNumberError: payload,
      loading: false,
    };
  }
  if (type === actions.ORGANIZATIONERROR_MESSAGE_CLEARED) {
    return {
      ...state,
      organizationNotExist: null,
    };
  }
  if (
    type === actions.ORGANIZATIONPLANTERROR_MESSAGE_CLEARED
  ) {
    return {
      ...state,
      orgPlantNotFound: null,
    };
  }
  if (
    type === actions.EMPLOYEENUMBERERROR_MESSAGE_CLEARED
  ) {
    return {
      ...state,
      employeeNumberError: null,
    };
  }
  return state;
};
