import { createSlice } from '@reduxjs/toolkit';
import { remove } from 'lodash';
import { LoadingProps } from '../../types/loading.type';
import { ProductProps } from '../../types/product.type';
import { displaySuccess } from '../../ultils/displayToast';
import { getCreateSuccessMsg, getUpdateSuccessMsg } from '../../ultils/getMessage';
import { createImportedProduct } from '../actions/importedProduct.actions';
import { RootState } from '../store';

export interface ImportedProductProps extends ProductProps {
  triggered: boolean;
  error: string | undefined;
}

export interface ImportedProductSliceProps {
  productList: ImportedProductProps[];
  loading: LoadingProps;
}

const initialState: ImportedProductSliceProps = {
  productList: [] as ImportedProductProps[],
  loading: 'idle',
};

const importedProductSlice = createSlice({
  name: 'importedProduct',
  initialState,
  reducers: {
    importProducts: (state, action) => {
      state.productList = [...action.payload];
      state.productList.map((product) => ({ ...product, triggered: false, error: undefined }));
      state.loading = 'succeeded';
    },
    updateImportedProducts: (state, action) => {
      state.productList = state.productList.map((product) => {
        return product.id == action.payload.id ? action.payload : product;
      });
      state.loading = 'succeeded';
      displaySuccess(getUpdateSuccessMsg(action.payload.name));
    },
    removeImportedProducts: (state, action) => {
      remove(state.productList, (product) => {
        return product.id === action.payload.id;
      });
      state.loading = 'succeeded';
    },
    setTriggeredProduct: (state, action) => {
      state.productList = state.productList.map((product) =>
        product.id == action.payload.id ? (product = { ...product, triggered: action.payload.triggered }) : product,
      );
      state.loading = 'succeeded';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createImportedProduct.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        remove(state.productList, (product) => {
          return product.id === action.payload.id;
        });
        displaySuccess(getCreateSuccessMsg(action.payload.name));
      })
      .addCase(createImportedProduct.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(createImportedProduct.rejected, (state, action) => {
        state.loading = 'failed';
        state.productList = state.productList.map((product) =>
          product.id == action.meta.arg.id ? (product = { ...product, error: action.error.message }) : product,
        );
      });
  },
});

export const importedProductSelector = (state: RootState) => state.importedProduct;
export const { importProducts, updateImportedProducts, setTriggeredProduct,removeImportedProducts } = importedProductSlice.actions;
export default importedProductSlice.reducer;
