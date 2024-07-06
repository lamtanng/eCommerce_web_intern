import { omit } from 'lodash';
import { PurchaseFormSchemaProps, PurchaseGetRequestParams, PurchaseProps } from '../types/purchase.type';
import { axiosRefresh } from './axiosRefresh';

function getAll(params?: PurchaseGetRequestParams) {
  const url = '/purchase';
  return axiosRefresh.get<PurchaseProps[]>(url, { params });
}

function create(data: PurchaseFormSchemaProps) {
  const url = '/purchase';
  return axiosRefresh.post<PurchaseProps>(url, { ...omit(data, 'id') });
}

function update(data: PurchaseFormSchemaProps) {
  const url = `/purchase/${data.id}`;
  return axiosRefresh.patch<PurchaseProps>(url, { ...omit(data, 'id') });
}

export const purchaseApi = { getAll, create, update };
