import { createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from '../../apis/product.api';
import { ProductFormSchema } from '../../types/product.type';

const createImportedProduct = createAsyncThunk(
  'importedProduct/createImportedProduct',
  async (data: ProductFormSchema) => {
    const resp = await productApi.import(data);
    return { ...resp.data, id: data.id };
  },
);

export { createImportedProduct };
