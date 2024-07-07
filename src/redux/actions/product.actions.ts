import { createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from '../../apis/product.api';
import { GetAllProductParams, ProductFormSchema, ProductProps } from '../../types/product.type';

const fetchProductList = createAsyncThunk('product/fetchProductList', async (params?: GetAllProductParams) => {
  return await productApi.getAll(params);
});
const getProductById = createAsyncThunk('product/getProductById', async (id: ProductProps['id']) => {
  return await productApi.getById(id);
});
const getProductByURL = createAsyncThunk('product/getProductByURL', async (urlName: ProductProps['urlName']) => {
  return await productApi.getByURL(urlName);
});
const createProduct = createAsyncThunk('product/createProduct', async (data: ProductFormSchema) => {
  return await productApi.create(data);
});
const removeProduct = createAsyncThunk('product/removeProduct', async (id: ProductProps['id']) => {
  return await productApi.remove(id);
});
const updateProduct = createAsyncThunk('product/updateProduct', async (data: ProductFormSchema) => {
  return await productApi.update(data);
});

export { createProduct, fetchProductList, getProductById, getProductByURL, removeProduct, updateProduct };
