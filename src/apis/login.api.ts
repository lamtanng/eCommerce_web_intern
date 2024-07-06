import LoginProps from '../types/login.type';
import LoginResponseProps from '../types/loginResponse.type';
import RefreshTokenProps from '../types/refreshToken.type';
import { axiosRefresh } from './axiosRefresh';

function login(data: LoginProps) {
  const url = '/login';
  return axiosRefresh.post<LoginResponseProps>(url, data);
}
function getAll() {
  const url = '/login';
  return axiosRefresh.get(url);
}
function refreshToken(data: RefreshTokenProps) {
  const url = '/refresh';
  return axiosRefresh.post<LoginResponseProps>(url, data);
}

function logout(data: RefreshTokenProps) {
  const url = '/logout';
  return axiosRefresh.post(url, { refreshToken: data });
}

export { getAll, login, refreshToken, logout };
