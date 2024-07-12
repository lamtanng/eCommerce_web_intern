import { createSlice } from '@reduxjs/toolkit';
import { remove } from 'lodash';
import { RejectedAction } from '../../types/actionState.type';
import { LoadingProps } from '../../types/loading.type';
import { ProductProps } from '../../types/product.type';
import { displayError, displaySuccess } from '../../ultils/displayToast';
import { getCreateSuccessMsg, getRemovedSuccessMsg, getUpdateSuccessMsg } from '../../ultils/getMessage';
import {
  createProduct,
  fetchProductList,
  getProductById,
  getProductByURL,
  removeProduct,
  updateProduct,
  uploadProductImage,
} from '../actions/product.actions';
import { RootState } from '../store';

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
        state.productList = action.payload;
      })
      .addCase(fetchProductList.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productList = [action.payload];
      })
      .addCase(getProductByURL.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productList = [action.payload];
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productList.push(action.payload);
        displaySuccess(getCreateSuccessMsg('Product'));
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        remove(state.productList, (product) => product.id === action.meta.arg);
        displaySuccess(getRemovedSuccessMsg('Product'));
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productList = state.productList.map((product) =>
          product.id === action.payload.id ? action.payload : product,
        );
        displaySuccess(getUpdateSuccessMsg('Product'));
      })
      .addCase(uploadProductImage.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.productList = state.productList.map((product) =>
          product.id === action.payload.id ? action.payload : product,
        );
        displaySuccess(getUpdateSuccessMsg('Product'));
      })
      // .addMatcher(
      //   (action) => action.type.endsWith('/pending'),
      //   (state) => {
      //     state.loading = 'loading';
      //   },
      // )
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
