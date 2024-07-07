import { omit } from 'lodash';
import {
  PurchaseFormSchema,
  PurchaseGetRequestParams,
  PurchaseProps,
  PurchaseReviewFormSchema,
} from '../types/purchase.type';
import { axiosPrivate } from './axiosPrivate';

function getAll(params?: PurchaseGetRequestParams) {
  const url = '/purchase';
  return axiosPrivate.get<PurchaseProps[]>(url, { params });
}

function getAllWithAdmin(params?: PurchaseGetRequestParams) {
  const url = `/purchase/admin`;
  return axiosPrivate.get<PurchaseProps[]>(url, { params });
}

function getById(id: PurchaseProps['id']) {
  const url = `/purchase/${id}`;
  return axiosPrivate.get<PurchaseProps>(url);
}

function create(data: PurchaseFormSchema) {
  const url = '/purchase';
  return axiosPrivate.post<PurchaseProps>(url, { ...omit(data, 'id') });
}

function remove(id: PurchaseProps['id']) {
  const url = `/purchase/${id}`;
  return axiosPrivate.delete(url);
}

function update(data: PurchaseFormSchema) {
  const url = `/purchase/${data.id}`;
  return axiosPrivate.patch<PurchaseProps>(url, { ...omit(data, 'id') });
}

function review(data: PurchaseReviewFormSchema) {
  const url = `/purchase/review/${data.id}`;
  return axiosPrivate.patch<PurchaseProps>(url, { ...omit(data, 'id') });
}

export const purchaseApi = { getAll, create, update, remove, getAllWithAdmin, getById, review };
