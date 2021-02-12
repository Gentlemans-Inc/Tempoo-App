import Axios from 'axios';
import Toast from 'react-native-toast-message';
import {API_URL} from '@env';
import {getSecureValue} from '@store';
// const UNAUTHORIZED = 401;
const INTERNAL_SERVER_ERROR = 500;

export interface Response {
  status: string;
}

const axios = Axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

axios.interceptors.request.use(async (config) => {
  const headers = {
    ...config.headers,
    Authorization: `Bearer ${await getSecureValue('jwt')}`,
  };

  return {
    ...config,
    headers,
  };
});

axios.interceptors.response.use(
  (response) => response,
  async (err) => {
    const {status} = err.response;

    if (status === INTERNAL_SERVER_ERROR) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Parece que houve um problema 😞',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }

    return Promise.reject(err.response);
  },
);

export default axios;
