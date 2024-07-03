import axios, { AxiosError } from 'axios';

const baseURL = 'http://localhost:8070/';
const timeout = 10000;
const headers = {
  'Content-Type': 'application/json',
};

const axiosClient = axios.create({
  baseURL,
  timeout,
  headers,
});
const axiosRefresh = axios.create({
  baseURL,
  timeout,
  headers,
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    const data = response;
    console.log('Resp >> ', data);
    return data;
  },
  function (error: AxiosError) {
    console.log('Error Resp >> ', error);
    return Promise.reject(error);
  }
);

export { axiosClient, axiosRefresh };
