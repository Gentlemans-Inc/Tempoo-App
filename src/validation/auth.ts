import {AuthParams, RegisterParams} from '@models/User';
import {ValidationResponse} from '@models/Validation';

export class ValidateAuthFields {
  static validateEmail(email: string): ValidationResponse {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEx.test(email)) {
      return {isValid: false, message: 'Enter a valid email address!'};
    }
    return {isValid: true};
  }

  static checkPassword(
    password: string,
    confirmPassword: string,
  ): ValidationResponse {
    if (password.length < 6) {
      return {
        isValid: false,
        message: 'The password need to have at least 6 characters',
      };
    } else if (password !== confirmPassword) {
      return {
        isValid: false,
        message: "The passwords doesn't match",
      };
    } else {
      return {isValid: true};
    }
  }

  static validateAuthParams(authParams: AuthParams): ValidationResponse {
    const emailValidation = this.validateEmail(authParams.email);
    if (!emailValidation.isValid) {
      return emailValidation;
    } else if (authParams.password.length < 1) {
      return {isValid: false, message: 'Enter your password!'};
    } else {
      return {isValid: true};
    }
  }

  static validateRegisterParams(
    registerParams: RegisterParams,
    passwordConfirm: string,
  ): ValidationResponse {
    const emailValidation = this.validateEmail(registerParams.email);
    const passwordsValidation = this.checkPassword(
      registerParams.password,
      passwordConfirm,
    );
    if (registerParams.name.length < 3) {
      return {isValid: false, message: 'Enter a valid name!'};
    } else if (!emailValidation.isValid) {
      return emailValidation;
    } else if (!passwordsValidation.isValid) {
      return passwordsValidation;
    } else {
      return {isValid: true};
    }
  }
}
