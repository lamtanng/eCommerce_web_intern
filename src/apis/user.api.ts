import SignUpProps from '../types/signUp.type';
import UserProps from '../types/user.type';
import { axiosClient } from './axios';
import { axiosPrivate } from './axiosPrivate';

function create(data: SignUpProps) {
  const url = '/user';
  return axiosClient.post(url, data);
}

function getUser() {
  const url = '/user';
  return axiosPrivate.get<UserProps>(url);
}

export const userApi = { create, getUser };
