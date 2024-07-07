import { CategoryParams, CategoryProps } from '../types/category.type';
import { axiosClient } from './axios';
import { axiosPrivate } from './axiosPrivate';

function getAll(params?: CategoryParams) {
  const url = '/category';
  return axiosClient.get<CategoryProps[]>(url, { params });
}

function create(data: CategoryProps) {
  const url = '/category';
  return axiosPrivate.post<CategoryProps>(url, { name: data.name });
}

function getById(id: CategoryProps['id']) {
  const url = `/category/id/${id}`;
  return axiosPrivate.post<CategoryProps>(url);
}

function remove(id: CategoryProps['id']) {
  const url = `/category/${id}`;
  return axiosPrivate.delete(url);
}

function update(data: CategoryProps) {
  const url = `/category/${data.id}`;
  return axiosPrivate.patch(url, { name: data.name });
}

export const categoryApi = { getAll, create, remove, getById, update };
