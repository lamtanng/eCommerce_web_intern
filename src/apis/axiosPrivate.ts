import axios, { AxiosError } from 'axios';
import { getStoredAuth, refresh } from '../ultils/authToken';
import { baseURL, headers, timeout } from './axios.constants';

export const axiosPrivate = axios.create({
  baseURL: baseURL,
  timeout: timeout,
  headers: headers,
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const auth = getStoredAuth();
    config.headers.Authorization = `Bearer ${auth?.accessToken}`;
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const prevRequest = error?.config;

    if (error?.response?.status === 401 && error.response?.statusText === 'Unauthorized' && prevRequest !== undefined) {
      const newReq = await refresh();
      prevRequest.headers.Authorization = `Bearer ${newReq.accessToken}`;
      return axiosPrivate(prevRequest);
    }
    return Promise.reject(error.response?.data);
  },
);
