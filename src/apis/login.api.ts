import LoginProps from '../types/login.type';
import LoginResponseProps from '../types/loginResponse.type';
import { axiosClient } from './axios';

function login(data: LoginProps) {
  const url = '/login';
  return axiosClient.post<LoginResponseProps>(url, data);
}
function getAll() {
  const url = '/login';
  return axiosClient.get(url);
}

export { getAll, login };
