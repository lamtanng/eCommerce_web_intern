import { createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from '../../apis/product.api';
import { GetAllProductParams, ProductFormSchema, ProductProps } from '../../types/product.type';

const fetchProductList = createAsyncThunk('product/fetchProductList', async (params?: GetAllProductParams) => {
  const resp = await productApi.getAll(params);
  return resp.data;
});
const getProductById = createAsyncThunk('product/getProductById', async (id: ProductProps['id']) => {
  const resp = await productApi.getById(id);
  return resp.data;
});
const getProductByURL = createAsyncThunk('product/getProductByURL', async (urlName: ProductProps['urlName']) => {
  const resp = await productApi.getByURL(urlName);
  return resp.data;
});
const createProduct = createAsyncThunk('product/createProduct', async (data: ProductFormSchema) => {
  const resp = await productApi.create(data);
  return resp.data;
});
const removeProduct = createAsyncThunk('product/removeProduct', async (id: ProductProps['id']) => {
  const resp = await productApi.remove(id);
  return resp.data;
});
const updateProduct = createAsyncThunk('product/updateProduct', async (data: ProductFormSchema) => {
  const resp = await productApi.update(data);
  return resp.data;
});

export { createProduct, fetchProductList, getProductById, getProductByURL, removeProduct, updateProduct };
