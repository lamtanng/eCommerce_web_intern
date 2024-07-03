// import axios, { AxiosError } from 'axios';

// const baseURL = 'http://localhost:8070/';
// const timeout = 10000;
// const headers = {
//   'Content-Type': 'application/json',
// };

// const axiosRefresh = axios.create({
//   baseURL,
//   timeout,
//   headers,
// });

// axiosRefresh.interceptors.request.use(
//   (config) => {
//     config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
//     console.log('Req >> ', config.headers['Authorization']);

//     return config;
//   },
//   (error: AxiosError) => Promise.reject(error)
// );

// axiosRefresh.interceptors.response.use(
//   function (response) {
//     const data = response;
//     console.log('Resp >> ', data);
//     return data;
//   },
//   function (error: AxiosError) {
//     console.log('Error Resp >> ', error);
//     return Promise.reject(error);
//   }
// );
