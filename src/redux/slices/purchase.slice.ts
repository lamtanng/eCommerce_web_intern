import { createSlice } from '@reduxjs/toolkit';
import { LoadingProps } from '../../types/loading.type';
import { PurchaseProps } from '../../types/purchase.type';
import { createPurchase, fetchPurchaseList, removePurchase, updatePurchase } from '../actions/purchase.action';
import { RejectedAction } from '../../types/actionState.type';
import { displayError, displaySuccess } from '../../ultils/displayToast';
import { RootState } from '../store';
import { remove } from 'lodash';

export interface PurchaseSliceProps {
  purchaseList: PurchaseProps[];
  loading: LoadingProps;
  error: string | undefined;
}

const initialState: PurchaseSliceProps = {
  purchaseList: [],
  loading: 'idle',
  error: undefined,
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
      .addCase(createPurchase.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.purchaseList.push(action.payload);
        displaySuccess('Purchase updated successfully');
      })
      .addCase(updatePurchase.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.purchaseList = state.purchaseList.map((purchase) =>
          purchase.id === action.payload.id ? action.payload.id : purchase,
        );
        displaySuccess('Purchase updated successfully');
      })
      .addCase(removePurchase.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        remove(state.purchaseList, (purchase) => purchase.id === action.meta.arg);
        displaySuccess('Purchase removed successfully');
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

export const purchaseSelector = (state: RootState) => state.purchase;
export default purchaseSlice.reducer;
