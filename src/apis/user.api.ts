import SignUpProps from '../types/signUp.type';
import { axiosClient } from './axios';

function create(data: SignUpProps) {
  const url = '/user';
  return axiosClient.post(url, data);
}

export const userApi = { create };
