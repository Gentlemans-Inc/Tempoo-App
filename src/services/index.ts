import Axios from 'axios';
const UNAUTHORIZED = 401;
const INTERNAL_SERVER_ERROR = 500;

export interface Response {
  status: string;
}

const axios = Axios.create({
  baseURL: 'https://tempoo-api-8usdj.ondigitalocean.app/tempoo-api/api/v1',
  timeout: 10000,
});

axios.interceptors.request.use((config) => {
  const headers = {
    ...config.headers,
    'access-token': 'some token',
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

    if (status === UNAUTHORIZED) {
      // Toast
    }

    if (status === INTERNAL_SERVER_ERROR) {
      // Toast
    }

    return Promise.reject(err.response);
  },
);

export default axios;
