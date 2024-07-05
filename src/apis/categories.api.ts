import { CategorySchemaProps } from '../pages/Category/Category.constants';
import { CategoryParams, CategoryProps } from '../types/category.type';
import { axiosClient } from './axios';
import { axiosRefresh } from './axiosRefresh';

function getAll(params: CategoryParams) {
  const url = '/category';
  return axiosClient.get<CategoryProps>(url, { params });
}

function create(data: CategorySchemaProps) {
  const url = '/category';
  return axiosRefresh.post<CategoryProps>(url, data);
}

function getById(id: CategoryProps['id']) {
  const url = `/category/id/${id}`;
  return axiosRefresh.post<CategoryProps>(url);
}

function remove(id: CategoryProps['id']) {
  const url = `/category/${id}`;
  return axiosRefresh.delete(url);
}

function update(data: CategoryProps) {
  const url = `/category/${data.id}`;
  return axiosRefresh.patch(url, { name: data.name });
}

export const categoryApi = { getAll, create, remove, getById, update };
