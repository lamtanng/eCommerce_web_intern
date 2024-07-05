import { axiosClient } from '../apis/axios';
import AuthProps from '../types/auth.type';
import LoginResponseProps from '../types/loginResponse.type';
import RefreshTokenProps from '../types/refreshToken.type';
import { decodeToken } from '../ultils/decodToken';
import useAuth from './useAuth';

export function reLogin(data: RefreshTokenProps) {
  const url = '/refresh';
  return axiosClient.post<LoginResponseProps>(url, data, {
    headers: {
      Authorization: `Bearer ${data.refreshToken}`,
    },
  });
}

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const response = await reLogin({ refreshToken: auth.refreshToken });
    let decodedToken = decodeToken(response.data.accessToken);
    let authData: AuthProps = { ...response.data, ...decodedToken };
    localStorage.setItem('auth', JSON.stringify(authData));
    setAuth(() => ({ ...response.data, ...decodedToken }));
    return response.data;
  };

  return refresh;
};

export default useRefreshToken;
