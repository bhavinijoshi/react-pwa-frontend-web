import { createSelector } from 'reselect';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';
import Roles from 'security/roles';

const roles = Roles.values;
const selectRaw = (state) => state.auth;

const selectAuthenticationUser = createSelector(
  [selectRaw],
  (auth) => auth.authenticationUser,
);

const selectCurrentUser = createSelector(
  [selectRaw],
  (auth) => auth.currentUser,
);

const selectCurrentUserEmail = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.email : null),
);

const selectCurrentUserFullName = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser ? currentUser.fullName : '',
);

const selectSignedIn = createSelector(
  [selectCurrentUser],
  (currentUser) => !!currentUser && !!currentUser.id,
);

const selectRoles = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    currentUser ? currentUser.roles || [] : [],
);

const selectEmptyPermissions = createSelector(
  [selectRoles],
  (roles) => !roles || !roles.length,
);

const selectLoading = createSelector(
  [selectRaw],
  (auth) => !!auth.loading,
);

const selectLoadingInit = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingInit,
);

const selectLoadingEmailConfirmation = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingEmailConfirmation,
);

const selectLoadingPasswordResetEmail = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingPasswordResetEmail,
);

const selectLoadingPasswordReset = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingPasswordReset,
);

const selectLoadingVerifyEmail = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingVerifyEmail,
);

const selectLoadingUpdateProfile = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingUpdateProfile,
);

const selectErrorMessage = createSelector(
  [selectRaw],
  (auth) => auth.errorMessage,
);
const selectErrorMessageOrganization = createSelector(
  [selectRaw],
  (auth) => auth.organizationNotExist,
);
const selectErrorMessageEmployeeNumber = createSelector(
  [selectRaw],
  (auth) => auth.employeeNumberError,
);
const selectErrorMessageOrgPlant = createSelector(
  [selectRaw],
  (auth) => auth.orgPlantNotFound,
);
const selectCurrentUserNameOrEmailPrefix = createSelector(
  [selectCurrentUser, selectCurrentUserFullName],
  (currentUser, fullName) => {
    if (!currentUser) {
      return '';
    }

    if (fullName && fullName.length < 25) {
      return fullName;
    }

    if (currentUser.firstName) {
      return currentUser.firstName;
    }

    return currentUser.email.split('@')[0];
  },
);

const selectCurrentUserAvatar = createSelector(
  [selectCurrentUser],
  (currentUser) => {
    if (
      !currentUser ||
      !currentUser.avatars ||
      !currentUser.avatars.length ||
      !currentUser.avatars[0].publicUrl
    ) {
      return null;
    }

    return currentUser.avatars[0].publicUrl;
  },
);

const selectOrganizationPlants = createSelector(
  [selectRaw],
  (auth) => auth.orgPlants,
);
const selectOrgPrefix = createSelector(
  [selectRaw],
  (auth) => auth.orgPrefix,
);
const selectOrganization = createSelector(
  [selectRaw],
  (auth) => auth.organization,
);
const selectPlantDefaultValue = createSelector(
  [selectRaw],
  (auth) => auth.plantDefaultValue,
);
const selectEnable2FA = createSelector(
  [selectRaw],
  (auth) => auth.twoFactorEnabled,
);
const selectLoadingVerifyCode = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingVerifyCode,
);
const selectLoadingResendCode = createSelector(
  [selectRaw],
  (auth) => !!auth.loadingResendCode,
);

const selectPermissionToReadOrg = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.orgOptionRead,
    ),
);

const selectPermissionToReadPlant = createSelector(
  [selectCurrentUser],
  (currentUser) =>
    new PermissionChecker(currentUser).match(
      Permissions.values.plantOptionRead,
    ),
);

const selectPermissionToReadBLEServices = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.roles.includes(roles.owner) ? true : currentUser?.settings?.enableBLEServices || false
);

const selectPermissionToReadArcFlashServices = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.roles.includes(roles.owner) ? true : currentUser?.settings?.enableArcFlash || false
);

const selectPermissionToReadPandemicServices = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.roles.includes(roles.owner) ? true : currentUser?.settings?.enablePandemic || false
);

const selectPermissionToReadLOTOServices = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.roles.includes(roles.owner) ? true : currentUser?.settings?.enableLOTO || false
);

const selectPermissionToReadMobileLOTOServices = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser.roles.includes(roles.user) ? true : currentUser?.settings?.enableLOTO || false
);
const selectors = {
  selectLoadingPasswordResetEmail,
  selectLoadingEmailConfirmation,
  selectLoadingInit,
  selectLoadingUpdateProfile,
  selectLoading,
  selectEmptyPermissions,
  selectRoles,
  selectSignedIn,
  selectCurrentUserFullName,
  selectCurrentUserEmail,
  selectCurrentUser,
  selectAuthenticationUser: selectAuthenticationUser,
  selectErrorMessage,
  selectErrorMessageEmployeeNumber,
  selectErrorMessageOrganization,
  selectErrorMessageOrgPlant,
  selectRaw,
  selectCurrentUserNameOrEmailPrefix,
  selectCurrentUserAvatar,
  selectLoadingPasswordReset,
  selectLoadingVerifyEmail,
  selectOrganizationPlants,
  selectOrgPrefix,
  selectOrganization,
  selectPlantDefaultValue,
  selectEnable2FA,
  selectLoadingVerifyCode,
  selectLoadingResendCode,
  selectPermissionToReadOrg,
  selectPermissionToReadPlant,
  selectPermissionToReadBLEServices,
  selectPermissionToReadArcFlashServices,
  selectPermissionToReadPandemicServices,
  selectPermissionToReadLOTOServices,
  selectPermissionToReadMobileLOTOServices
};

export default selectors;
