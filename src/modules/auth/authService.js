import authAxios from 'modules/shared/axios/authAxios';
import { AuthToken } from 'modules/auth/authToken';

export default class AuthService {
  static async sendEmailVerification() {
    const response = await authAxios.post(
      '/auth/send-email-address-verification-email',
    );

    return response.data;
  }

  static async sendPasswordResetEmail(email) {
    const response = await authAxios.post(
      '/auth/send-password-reset-email',
      {
        email,
      },
    );

    return response.data;
  }

  static async registerWithEmailAndPassword(
    email,
    password,
    orgPlantId,
    employeeId,
    orgId,
  ) {
    const response = await authAxios.post('/auth/sign-up', {
      email,
      password,
      orgPlantId,
      employeeId,
      orgId,
    });

    return response.data;
  }

  static async signinWithEmailAndPassword(email, password) {
    const response = await authAxios.post('/v1/auth/sign-in', {
      email,
      password,
    });

    return response.data;
  }

  static async fetchMe(token) {
    const response = await authAxios.get('/auth/me', { headers: { token } });
    return response.data;
  }

  static async isEmailConfigured() {
    const response = await authAxios.get(
      '/auth/email-configured',
    );
    return response.data;
  }

  static signout() {
    AuthToken.set(null, true);
  }

  static async updateProfile(
    firstName,
    lastName,
    countryCode,
    phoneNumber,
    avatars,
    twoFactorEnabled
  ) {
    const body = {
      profile: {
        firstName,
        lastName,
        countryCode,
        phoneNumber,
        avatars,
        twoFactorEnabled
      },
    };

    const response = await authAxios.put(
      '/auth/profile',
      body,
    );

    return response.data;
  }

  static async passwordReset(token, password) {
    const response = await authAxios.put(
      '/auth/password-reset',
      {
        token,
        password,
      },
    );

    return response.data;
  }

  static async verifyEmail(token) {
    const response = await authAxios.put(
      '/auth/verify-email',
      {
        token,
      },
    );

    return response.data;
  }

  static async fetchOrganization(orgPrefix) {
    var url = '/organizations/prefix/' + orgPrefix;
    const response = await authAxios.get(url);
    return response.data;
  }

  static async fetchOrgPlants(id) {
    var url = '/org-plants/orgId/' + id;
    const response = await authAxios.get(url);
    return response.data;
  }

  static async verifyPhone(token) {
    const response = await authAxios.post(
      '/auth/verify-phone',
      {
        token,
      },
    );
    return response.data;
  }

  static async verifyCode(token) {
    const response = await authAxios.post(
      '/auth/verify-login',
      {
        token,
      },
    );
    return response.data;
  }

  static async resendCode() {
    const response = await authAxios.post(
      '/auth/resend-code'
    )
    return response.data;
  }
}
