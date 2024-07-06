import { createAsyncThunk } from '@reduxjs/toolkit';
import { purchaseApi } from '../../apis/purchase.api';
import { PurchaseFormSchemaProps, PurchaseGetRequestParams } from '../../types/purchase.type';

const fetchPurchaseList = createAsyncThunk('purchase/fetchPurchaseList', async (params?: PurchaseGetRequestParams) => {
  const response = await purchaseApi.getAll(params);
  return response.data;
});
const createPurchase = createAsyncThunk('purchase/createPurchase', async (params: PurchaseFormSchemaProps) => {
  const response = await purchaseApi.create(params);
  return response.data;
});
const updatePurchase = createAsyncThunk('purchase/updatePurchase', async (params: PurchaseFormSchemaProps) => {
  const response = await purchaseApi.update(params);
  return response.data;
});

export { fetchPurchaseList, createPurchase, updatePurchase };
