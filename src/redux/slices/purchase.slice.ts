import { createSlice } from '@reduxjs/toolkit';
import { remove } from 'lodash';
import { RejectedAction } from '../../types/actionState.type';
import { LoadingProps } from '../../types/loading.type';
import { PurchaseProps } from '../../types/purchase.type';
import { displayError, displaySuccess } from '../../ultils/displayToast';
import { getCreateSuccessMsg, getRemovedSuccessMsg, getUpdateSuccessMsg } from '../../ultils/getMessage';
import {
  createPurchase,
  fetchPurchaseList,
  fetchPurchasesWithAdmin,
  getPurchaseById,
  removePurchase,
  reviewPurchase,
  updatePurchase,
} from '../actions/purchase.action';
import { RootState } from '../store';

export interface PurchaseSliceProps {
  purchaseList: PurchaseProps[];
  loading: LoadingProps;
  error: string | null;
}

const initialState: PurchaseSliceProps = {
  purchaseList: [],
  loading: 'idle',
  error: null,
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPurchaseList.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.purchaseList = action.payload;
      })
      .addCase(fetchPurchaseList.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchPurchasesWithAdmin.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.purchaseList = action.payload;
      })
      .addCase(getPurchaseById.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.purchaseList = [action.payload];
      })
      .addCase(createPurchase.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.purchaseList.push(action.payload);
        // displaySuccess(getCreateSuccessMsg('Purchase'));
      })
      .addCase(updatePurchase.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.purchaseList = state.purchaseList.map((purchase) =>
          purchase.id === action.payload.id ? action.payload : purchase,
        );
        displaySuccess(getUpdateSuccessMsg('Purchase'));
      })
      .addCase(reviewPurchase.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.purchaseList = state.purchaseList.map((purchase) =>
          purchase.id === action.payload.id ? action.payload : purchase,
        );
        displaySuccess(getUpdateSuccessMsg('Purchase'));
      })
      .addCase(removePurchase.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        remove(state.purchaseList, (purchase) => purchase.id === action.meta.arg);
        displaySuccess(getRemovedSuccessMsg('Purchase'));
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
          state.error = action.error.message || null;
          displayError(state.error);
        },
      );
  },
});

export const purchaseSelector = (state: RootState) => state.purchase;
export default purchaseSlice.reducer;
