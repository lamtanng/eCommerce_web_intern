import axios, { AxiosError } from 'axios';
import { baseURL, headers, timeout } from './axios.constants';

const axiosClient = axios.create({
  baseURL: baseURL,
  timeout: timeout,
  headers: headers,
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

export { axiosClient };

