import { omit } from 'lodash';
import {
  GetAllProductParams,
  ProductFormSchemaProps,
  ProductProps,
  UploadImageRequestProps,
} from '../types/product.type';
import { axiosRefresh } from './axiosRefresh';

function getAll(params?: GetAllProductParams) {
  const url = '/product';
  return axiosRefresh.get<ProductProps[]>(url, { params });
}

function getById(id: ProductProps['id']) {
  const url = `/product/id/${id}`;
  return axiosRefresh.get<ProductProps>(url);
}

function getByURL(urlName: ProductProps['urlName']) {
  const url = `/product/${urlName}`;
  return axiosRefresh.get<ProductProps>(url);
}

function create(data: ProductFormSchemaProps) {
  const url = '/product';
  return axiosRefresh.post<ProductProps>(url, data);
}

function remove(id: ProductProps['id']) {
  const url = `/product/${id}`;
  return axiosRefresh.delete(url);
}

function update(data: ProductFormSchemaProps) {
  const url = `/product/${data.id}`;
  return axiosRefresh.patch<ProductFormSchemaProps>(url, { ...omit(data, 'id') });
}

function uploadImage({ id, file }: UploadImageRequestProps) {
  const url = `/product/picture/${id}`;
  return axiosRefresh.patch<ProductFormSchemaProps>(url, { file });
}

export const productApi = { getAll, create, remove, update, getById, getByURL, uploadImage };
