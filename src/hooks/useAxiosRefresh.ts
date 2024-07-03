import { useEffect } from 'react';
import useAuth from './useAuth';
import useRefreshToken from './useRefreshToken';
import { axiosRefresh } from '../apis/axios';
import { AxiosError } from 'axios';

export default function useAxiosRefresh() {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosRefresh.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${auth.accessToken}`;
        console.log('Req >> ', config.headers['Authorization']);
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    const responseInterceptor = axiosRefresh.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const prevRequest = error?.config;
        console.log(
          'Test: ',
          error?.response?.status === 401 &&
            error.response?.statusText === 'Unauthorized' &&
            prevRequest !== undefined
        );

        if (
          error?.response?.status === 401 &&
          error.response?.statusText === 'Unauthorized' &&
          prevRequest !== undefined
        ) {
          const newReq = await refresh();
          prevRequest.headers.Authorization= `Bearer ${newReq.accessToken}`;
          return axiosRefresh(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosRefresh.interceptors.response.eject(responseInterceptor);
      axiosRefresh.interceptors.response.eject(requestInterceptor);
    };
  }, [auth, refresh]);
  return axiosRefresh;
}
