import { refreshToken } from '../apis/auth.api';
import AuthProps from '../types/auth.type';
import LoginResponseProps from '../types/loginResponse.type';
import { decodeToken } from './decodToken';

const getStoredAuth = () => JSON.parse(localStorage.getItem('auth') || '{}') as AuthProps;
const removeAuth = () => localStorage.removeItem('auth');
const setStoredAuth = (loginResponse: LoginResponseProps) => {
  let decodedToken = decodeToken(loginResponse.accessToken);
  let authData: AuthProps = { ...loginResponse, ...decodedToken };
  localStorage.setItem('auth', JSON.stringify(authData));
  console.log(getStoredAuth());
};
const refresh = async () => {
  const auth = getStoredAuth();
  const response = await refreshToken({ refreshToken: auth.refreshToken });
  setStoredAuth(response.data);
  return response.data;
};

export { getStoredAuth, setStoredAuth, refresh, removeAuth };
