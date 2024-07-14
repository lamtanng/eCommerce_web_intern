import { refreshToken } from '../apis/auth.api';
import { authKey } from '../constants/localStorageKeys';
import AuthProps from '../types/auth.type';
import LoginResponseProps from '../types/loginResponse.type';
import { decodeToken } from './decodToken';

const getStoredAuth = () => JSON.parse(localStorage.getItem(authKey) || '{}') as AuthProps;
const removeAuth = () => localStorage.removeItem(authKey);
const setStoredAuth = (loginResponse: LoginResponseProps) => {
  let decodedToken = decodeToken(loginResponse.accessToken);
  let authData: AuthProps = { ...loginResponse, ...decodedToken };
  localStorage.setItem(authKey, JSON.stringify(authData));
};
const refresh = async () => {
  const auth = getStoredAuth();
  const response = await refreshToken({ refreshToken: auth.refreshToken });
  setStoredAuth(response.data);
  return response.data;
};

export { getStoredAuth, refresh, removeAuth, setStoredAuth };
