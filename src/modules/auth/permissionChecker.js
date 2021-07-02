import { geRoutesThatUserRoleCanAccess } from "view/shared/routes/constants";
import Roles from 'security/roles';

const roles = Roles.values;
// const RoutesThatUserRoleCanAccess = geRoutesThatUserRoleCanAccess()
export default class PermissionChecker {
  constructor(currentUser, path) {
    this.currentUser = currentUser;
    this.userRoles = currentUser ? currentUser.roles : [];
    this.path = path || ""
  }

  match(permission) {
    if (!permission) {
      return true;
    }

    return this.rolesMatchOneOf(permission.allowedRoles);
  }

  rolesMatchOneOf(arg) {
    if (!this.userRoles) {
      return false;
    }

    if (!arg) {
      return false;
    }

    if (Array.isArray(arg)) {
      if (!arg.length) {
        return false;
      }

      return arg.some((role) =>
        this.userRoles.includes(role),
      );
    }

    return this.userRoles.includes(arg);
  }

  checkBLEServicesSetting(value) {
    const { enableBLEServices } = this.currentUser?.settings || {}
    if (this.currentUser.roles.includes(roles.owner)) return true
    if (value && !enableBLEServices) return false
    return true
  }

  checkLOTOServicesSetting(value) {
    const { enableLOTO } = this.currentUser?.settings || {}
    if (this.currentUser.roles.includes(roles.owner)) return true
    if (value && !enableLOTO) return false
    return true
  }

  checkArcFlashServicesSetting(value) {
    const { enableArcFlash } = this.currentUser?.settings || {}
    if (this.currentUser.roles.includes(roles.owner)) return true
    if (value && !enableArcFlash) return false
    return true
  }

  checkPandemicServicesSetting(value) {
    const { enablePandemic } = this.currentUser?.settings || {}
    if (this.currentUser.roles.includes(roles.owner)) return true
    if (value && !enablePandemic) return false
    return true
  }

  get isEmptyPermissions() {
    if (!this.isAuthenticated) {
      return false;
    }
    if (!this.userRoles || !this.userRoles.length) {
      return true;
    }
    if (this.userRoles.includes(roles.user)) {
      // if (RoutesThatUserRoleCanAccess.includes(this.path)) return false
      // return true;
      return false
    } else {
      return true
    }
    return false;
  }

  get isAuthenticated() {
    return !!this.currentUser && !!this.currentUser.id;
  }

  get isEmailVerified() {
    if (!this.isAuthenticated) {
      return false;
    }

    return this.currentUser.emailVerified;
  }
}
