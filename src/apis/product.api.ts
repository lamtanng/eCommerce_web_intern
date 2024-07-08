import { omit } from 'lodash';
import {
  GetAllProductParams,
  ProductFormSchema,
  ProductProps,
  UploadImageRequestProps,
} from '../types/product.type';
import { axiosPrivate } from './axiosPrivate';

function getAll(params?: GetAllProductParams) {
  const url = '/product';
  return axiosPrivate.get<ProductProps[]>(url, { params });
}

function getById(id: ProductProps['id']) {
  const url = `/product/id/${id}`;
  return axiosPrivate.get<ProductProps>(url);
}

function getByURL(urlName: ProductProps['urlName']) {
  const url = `/product/${urlName}`;
  return axiosPrivate.get<ProductProps>(url);
}

function create(data: ProductFormSchema) {
  const url = '/product';
  return axiosPrivate.post<ProductProps>(url, data);
}

function remove(id: ProductProps['id']) {
  const url = `/product/${id}`;
  return axiosPrivate.delete(url);
}

function update(data: ProductFormSchema) {
  const url = `/product/${data.id}`;
  return axiosPrivate.patch<ProductFormSchema>(url, { ...omit(data, 'id') });
}

function uploadImage({ id, file }: UploadImageRequestProps) {
  const url = `/product/picture/${id}`;
  return axiosPrivate.patch<ProductFormSchema>(url, { file });
}

export const productApi = { getAll, create, remove, update, getById, getByURL, uploadImage };
