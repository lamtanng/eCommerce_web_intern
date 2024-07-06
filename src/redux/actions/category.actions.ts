import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { CategoryParams, CategoryProps } from '../../types/category.type';
import { categoryApi } from '../../apis/categories.api';
import { CategorySchemaProps } from '../../pages/Category/Category.types';

const fetchCategory: AsyncThunk<AxiosResponse<CategoryProps, any>, CategoryParams, {}> = createAsyncThunk(
  'category/fetchCategory',
  async (params?: CategoryParams) => {
    const resp = await categoryApi.getAll(params);
    return resp;
  },
);

const createCategory = createAsyncThunk('category/createCategory', async (data: CategorySchemaProps) => {
  const resp = await categoryApi.create(data);
  return resp;
});

const deleteCategory = createAsyncThunk('category/deleteCategory', async (id: CategoryProps['id']) => {
  const resp = await categoryApi.remove(id);
  return resp;
});
const updateCategory = createAsyncThunk('category/updateCategory', async (data: CategoryProps) => {
  const resp = await categoryApi.update(data);
  return resp;
});

export { fetchCategory, createCategory, deleteCategory, updateCategory };
