import {AuthParams, RegisterParams} from '@models/User';
import {ValidateAuthFields} from './auth';

const authParams: AuthParams = {
  email: 'user@gmail.com',
  password: '123456',
};

const authWrongParams: AuthParams = {
  email: 'userail.com',
  password: '456',
};

const registerParams: RegisterParams = {
  name: 'Foo Bar',
  email: 'user@gmail.com',
  password: '123456',
};

const registerWrongParams: RegisterParams = {
  name: '',
  email: 'user@gmail.com',
  password: '123',
};

test('Validate email', () => {
  expect(ValidateAuthFields.validateEmail('user@gmail.com')).toBeTruthy();
});

test('Validate wrong email', () => {
  const validationEmail = ValidateAuthFields.validateEmail('user.com');
  expect(validationEmail.isValid).not.toBeTruthy();
});

test('Check passwords', () => {
  expect(ValidateAuthFields.checkPassword('123456', '123456')).toBeTruthy();
});

test('Check wrong passwords', () => {
  const checkPasswords = ValidateAuthFields.checkPassword('12345612', '123456');
  expect(checkPasswords.isValid).not.toBeTruthy();
});

test('Test AuthParams', () => {
  expect(ValidateAuthFields.validateAuthParams(authParams)).toBeTruthy();
});

test('Test wrong AuthParams', () => {
  const validateAuthParams = ValidateAuthFields.validateAuthParams(
    authWrongParams,
  );
  expect(validateAuthParams.isValid).not.toBeTruthy();
});

test('Test RegisterParams', () => {
  expect(
    ValidateAuthFields.validateRegisterParams(
      registerParams,
      registerParams.password,
    ),
  ).toBeTruthy();
});

test('Test wrong RegisterParams', () => {
  const validateRegisterParams = ValidateAuthFields.validateRegisterParams(
    registerWrongParams,
    registerParams.password,
  );
  expect(validateRegisterParams.isValid).not.toBeTruthy();
});
