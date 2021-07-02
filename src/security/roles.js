import { i18n } from 'i18n';
import _values from 'lodash/values';

class Roles {
  static get values() {
    //Order this role as per their precedence highest to lowest
    return {
      owner: 'owner',
      orgAdmin: 'orgAdmin',
      plantAdmin: 'plantAdmin',
      user: 'user',
      security: 'security',
      nurse: 'nurse',
      manager: 'manager',
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`entities.roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`entities.roles.${roleId}.description`);
  }

  static get selectOptions() {
    return _values(this.values).map((value) => ({
      id: value,
      value: value,
      title: this.descriptionOf(value),
      label: this.labelOf(value),
    }));
  }

  static findPrecedence(userRole) {
    const roles = Object.values(this.values)
    const rolePrecedenceNumber = Math.min(...userRole.map(
      (role) => {
        const index = roles.findIndex((thisRole) => role === thisRole)
        if (index > -1) {
          return index
        }
        return "notFound"
      }
    ).filter((item) => typeof item === "number"))
    return rolePrecedenceNumber;
  }

  static optionsAccordingToRole(currentUser) {
    let user = null;
    if (currentUser) {
      user = currentUser;
    } else {
      user = JSON.parse(
        sessionStorage.getItem('currentUser'),
      );
    }
    if (user) {
      const userRole = user.roles
      if (userRole) {
        const rolePrecedenceNumber = this.findPrecedence(userRole);
        if (typeof rolePrecedenceNumber !== "undefined") {
          return _values(this.values).map((value, index) => {
            if (index >= rolePrecedenceNumber) {
              return {
                id: value,
                value: value,
                title: this.descriptionOf(value),
                label: this.labelOf(value),
              }
            }
            return false
          }).filter(Boolean);
        }
      }
      return [];
    }
  }

  static isThisUserAllowed(recordUser, currentUser) {
    let user = null;
    if (!recordUser) {
      return false
    }
    if (currentUser) {
      user = currentUser;
    } else {
      user = JSON.parse(
        sessionStorage.getItem('currentUser'),
      );
    }
    if (user) {
      const userRole = user.roles
      const userRolePrecedenceNumber = this.findPrecedence(userRole);
      const recordRolePrecedenceNumber = this.findPrecedence(recordUser);
      if (userRolePrecedenceNumber <= recordRolePrecedenceNumber) {
        return true
      }
      return false
    }
    return false
  }
}

export default Roles;
