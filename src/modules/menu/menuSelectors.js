
import { createSelector } from 'reselect';
import authSelectors from 'modules/auth/authSelectors';
import PermissionChecker from 'modules/auth/permissionChecker';
import Permissions from 'security/permissions';

const selectRaw = (state) => state.menu;

const selectPermissionToReadMobileLOTOMenu = createSelector(
    [authSelectors.selectCurrentUser],
    (currentUser) =>
        new PermissionChecker(currentUser).match(
            Permissions.values.mobileLotoMenuRead,
        ),
);

const selectors = {
    selectRaw,
    selectPermissionToReadMobileLOTOMenu
};

export default selectors;