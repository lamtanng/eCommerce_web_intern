import LoginProps from '../types/login.type';
import LoginResponseProps from '../types/loginResponse.type';
import RefreshTokenProps from '../types/refreshToken.type';
import { axiosClient } from './axios';
import { axiosPrivate } from './axiosPrivate';

function login(data: LoginProps) {
  const url = '/login';
  return axiosClient.post<LoginResponseProps>(url, data);
}
function getAll() {
  const url = '/login';
  return axiosPrivate.get(url);
}
function refreshToken(data: RefreshTokenProps) {
  const url = '/refresh';
  return axiosPrivate.post<LoginResponseProps>(url, data);
}

function logout(data: RefreshTokenProps) {
  const url = '/logout';
  return axiosPrivate.post(url, { ...data });
}

export { getAll, login, refreshToken, logout };
