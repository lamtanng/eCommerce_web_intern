import axios, { AxiosError } from 'axios';
import { getStoredAuth, refresh } from '../ultils/authToken';

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
    const auth = getStoredAuth();
    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosRefresh.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const prevRequest = error?.config;

    if (error?.response?.status === 401 && error.response?.statusText === 'Unauthorized' && prevRequest !== undefined) {
      const newReq = await refresh();
      prevRequest.headers.Authorization = `Bearer ${newReq.accessToken}`;
      return axiosRefresh(prevRequest);
    }
    return Promise.reject(error.response?.data);
  },
);
