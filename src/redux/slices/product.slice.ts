import { createSlice } from '@reduxjs/toolkit';
import { ProductProps } from '../../types/product.type';
import { LoadingProps } from '../../types/loading.type';
import {
  createProduct,
  fetchProductList,
  getProductById,
  getProductByURL,
  removeProduct,
  updateProduct,
} from '../actions/product.actions';
import { RejectedAction } from '../../types/actionState.type';
import { RootState } from '../store';
import { displayError, displaySuccess } from '../../ultils/displayToast';
import { concat, remove } from 'lodash';

export interface ProductSliceProps {
  productList: ProductProps[];
  loading: LoadingProps;
  error: string | undefined;
}

const initialState: ProductSliceProps = {
  productList: [],
  loading: 'idle',
  error: undefined,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productList = action.payload.data;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productList = [action.payload.data];
      })
      .addCase(getProductByURL.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productList = [action.payload.data];
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productList.push(action.payload.data);
        displaySuccess('Product created successfully');
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        remove(state.productList, (product) => product.id === action.meta.arg);
        displaySuccess('Product removed successfully');
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productList = state.productList.map((product) =>
          product.id === action.payload.data.id ? action.payload.data : product,
        );
        displaySuccess('Product updated successfully');
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = 'loading';
        },
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = 'failed';
          state.error = action.error.message || undefined;
          displayError(state.error);
        },
      );
  },
});

export const productSelector = (state: RootState) => state.product;
export default productSlice.reducer;
