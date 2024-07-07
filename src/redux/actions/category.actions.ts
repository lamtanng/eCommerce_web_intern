import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoryApi } from '../../apis/categories.api';
import { CategorySchema } from '../../pages/Category/Category.types';
import { CategoryParams, CategoryProps } from '../../types/category.type';

const fetchCategory = createAsyncThunk('category/fetchCategory', async (params?: CategoryParams) => {
  const resp = await categoryApi.getAll(params);
  return resp.data;
});

const createCategory = createAsyncThunk('category/createCategory', async (data: CategorySchema) => {
  const resp = await categoryApi.create(data);
  return resp.data;
});

const deleteCategory = createAsyncThunk('category/deleteCategory', async (id: CategoryProps['id']) => {
  const resp = await categoryApi.remove(id);
  return resp.data;
});
const updateCategory = createAsyncThunk('category/updateCategory', async (data: CategoryProps) => {
  const resp = await categoryApi.update(data);
  return resp.data;
});

export { createCategory, deleteCategory, fetchCategory, updateCategory };
