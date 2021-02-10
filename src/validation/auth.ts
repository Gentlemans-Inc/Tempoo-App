import Toast from 'react-native-toast-message';
import {AuthParams, RegisterParams} from '@models/User';

export class ValidateAuthFields {
  static validateEmail(email: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Digite um e-mail válido',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
      return false;
    }
    return true;
  }

  static checkPassword(password: string, confirmPassword: string): boolean {
    let message: string;
    if (password.length < 6) {
      message = 'A senha deve ter no mínimo 6 caracteres';
    } else if (password !== confirmPassword) {
      message = 'As senhas não coincidem';
    } else {
      return true;
    }
    Toast.show({
      type: 'error',
      position: 'top',
      text1: message,
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
    return false;
  }

  static validateAuthParams(authParams: AuthParams): boolean {
    if (!this.validateEmail(authParams.email)) {
      return false;
    } else if (authParams.password.length < 1) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Digite sua senha!',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
      return false;
    } else {
      return true;
    }
  }

  static validateRegisterParams(
    registerParams: RegisterParams,
    passwordConfirm: string,
  ): boolean {
    if (registerParams.name.length < 3) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Digite um nome válido 😞',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
      return false;
    } else if (!this.validateEmail(registerParams.email)) {
      return false;
    } else if (!this.checkPassword(registerParams.password, passwordConfirm)) {
      return false;
    } else {
      return true;
    }
  }
}
