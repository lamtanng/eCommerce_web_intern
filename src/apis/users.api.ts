import useAxiosRefresh from '../hooks/useAxiosRefresh';
import User from '../types/signUp.type';
import { axiosClient } from './axios';




function add(data: User) {
const ax = useAxiosRefresh();
  const url = '/user';
  return ax.post(url, data);
}
function getAll() {
const ax = useAxiosRefresh();

  const url = '/user';
  return ax.get(url);
}

export { add, getAll };
