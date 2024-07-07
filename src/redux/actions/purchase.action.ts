import { createAsyncThunk } from '@reduxjs/toolkit';
import { purchaseApi } from '../../apis/purchase.api';
import {
  PurchaseFormSchema,
  PurchaseGetRequestParams,
  PurchaseProps,
  PurchaseReviewFormSchema,
} from '../../types/purchase.type';

const fetchPurchaseList = createAsyncThunk('purchase/fetchPurchaseList', async (params?: PurchaseGetRequestParams) => {
  const response = await purchaseApi.getAll(params);
  return response.data;
});
const fetchPurchasesWithAdmin = createAsyncThunk(
  'purchase/fetchPurchasesWithAdmin',
  async (params?: PurchaseGetRequestParams) => {
    const response = await purchaseApi.getAllWithAdmin(params);
    return response.data;
  },
);
const getPurchaseById = createAsyncThunk('purchase/getPurchaseById', async (id: PurchaseProps['id']) => {
  const response = await purchaseApi.getById(id);
  return response.data;
});
const createPurchase = createAsyncThunk('purchase/createPurchase', async (data: PurchaseFormSchema) => {
  const response = await purchaseApi.create(data);
  return response.data;
});
const updatePurchase = createAsyncThunk('purchase/updatePurchase', async (data: PurchaseFormSchema) => {
  const response = await purchaseApi.update(data);
  return response.data;
});
const reviewPurchase = createAsyncThunk('purchase/reviewPurchase', async (data: PurchaseReviewFormSchema) => {
  const response = await purchaseApi.review(data);
  return response.data;
});
const removePurchase = createAsyncThunk('purchase/removePurchase', async (id: PurchaseProps['id']) => {
  const response = await purchaseApi.remove(id);
  return response.data;
});

export {
  fetchPurchaseList,
  createPurchase,
  updatePurchase,
  removePurchase,
  getPurchaseById,
  reviewPurchase,
  fetchPurchasesWithAdmin,
};
