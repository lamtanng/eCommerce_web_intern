import { omit } from 'lodash';
import {
  PurchaseFormSchemaProps,
  PurchaseGetRequestParams,
  PurchaseProps,
  PurchaseReviewFormSchemaProps,
} from '../types/purchase.type';
import { axiosRefresh } from './axiosRefresh';

function getAll(params?: PurchaseGetRequestParams) {
  const url = '/purchase';
  return axiosRefresh.get<PurchaseProps[]>(url, { params });
}

function getAllWithAdmin(params?: PurchaseGetRequestParams) {
  const url = `/purchase/admin`;
  return axiosRefresh.get<PurchaseProps[]>(url, { params });
}

function getById(id: PurchaseProps['id']) {
  const url = `/purchase/${id}`;
  return axiosRefresh.get<PurchaseProps>(url);
}

function create(data: PurchaseFormSchemaProps) {
  const url = '/purchase';
  return axiosRefresh.post<PurchaseProps>(url, { ...omit(data, 'id') });
}

function remove(id: PurchaseProps['id']) {
  const url = `/purchase/${id}`;
  return axiosRefresh.delete(url);
}

function update(data: PurchaseFormSchemaProps) {
  const url = `/purchase/${data.id}`;
  return axiosRefresh.patch<PurchaseProps>(url, { ...omit(data, 'id') });
}

function review(data: PurchaseReviewFormSchemaProps) {
  const url = `/purchase/review/${data.id}`;
  return axiosRefresh.patch<PurchaseProps>(url, { ...omit(data, 'id') });
}

export const purchaseApi = { getAll, create, update, remove, getAllWithAdmin, getById, review };
