import { axiosClient } from '../apis/axios';
import LoginResponseProps from '../types/loginResponse.type';
import RefreshTokenProps from '../types/refreshToken.type';
import { decodeToken } from '../ultils/decodToken';
import useAuth from './useAuth';

function reLogin(data: RefreshTokenProps) {
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
    console.log('refresh >> ', response.data);
    let decodedToken = decodeToken(response.data.accessToken);
    setAuth(() => ({ ...response.data, ...decodedToken }));
    console.log('new Auth >> ', auth);

    return response.data;
  };

  return refresh;
};

export default useRefreshToken;
