import axios, { AxiosError } from 'axios';
import useRefreshToken, { reLogin } from '../hooks/useRefreshToken';
import { decodeToken } from '../ultils/decodToken';
import AuthProps from '../types/auth.type';

const baseURL = 'http://localhost:8070/';
const timeout = 10000;
const headers = {
  'Content-Type': 'application/json',
};

export const axiosRefresh = axios.create({
  baseURL,
  timeout,
  headers,
});

axiosRefresh.interceptors.request.use(
  (config) => {
    const auth = JSON.parse(localStorage.getItem('auth') || '{}');
    config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

axiosRefresh.interceptors.response.use(
  (response) => {
    console.log('Resp >> ', response);
    return response;
  },
  async (error: AxiosError) => {
    const refresh = async () => {
      const auth = JSON.parse(localStorage.getItem('auth') || '{}');
      const response = await reLogin({ refreshToken: auth.refreshToken });
      let decodedToken = decodeToken(response.data.accessToken);
      let authData: AuthProps = { ...response.data, ...decodedToken };
      localStorage.setItem('auth', JSON.stringify(authData));
      return response.data;
    };
    const prevRequest = error?.config;

    if (
      error?.response?.status === 401 &&
      error.response?.statusText === 'Unauthorized' &&
      prevRequest !== undefined
    ) {
      const newReq = await refresh();
      prevRequest.headers.Authorization = `Bearer ${newReq.accessToken}`;
      console.log(axiosRefresh(prevRequest));

      return axiosRefresh(prevRequest);
    }
    return Promise.reject(error);
  }
);
