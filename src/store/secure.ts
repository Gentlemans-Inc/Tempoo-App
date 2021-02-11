import * as Keychain from 'react-native-keychain';

type SetSecureValue = (key: string, value: string) => void;
type GetSecureValue = (key: string) => Promise<string | false>;
type RemoveSecureValue = (key: string) => Promise<boolean>;

export const setSecureValue: SetSecureValue = (key, value) => {
  Keychain.setGenericPassword(key /* <- can be a random string */, value, {
    service: key,
  });
};

export const getSecureValue: GetSecureValue = async (key) => {
  const result = await Keychain.getGenericPassword({service: key});
  if (result) {
    return result.password;
  }
  return false;
};

export const removeSecureValue: RemoveSecureValue = (key) => {
  return Keychain.resetGenericPassword({service: key});
};
