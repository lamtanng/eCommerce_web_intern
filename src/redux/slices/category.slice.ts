import { createSlice } from '@reduxjs/toolkit';
import { LoadingProps } from '../../types/loading.type';
import { RootState } from '../store';
import {
  createCategory,
  deleteCategory,
  fetchCategory,
  updateCategory,
} from '../actions/category.actions';
import { RejectedAction } from '../../types/actionState.type';
import { CategoryProps } from '../../types/category.type';
import { displaySuccess } from '../../ultils/displayToast';

export interface CategorySliceProps {
  categoryList: CategoryProps[];
  loading: LoadingProps;
  error: string | undefined;
}

const initialState: CategorySliceProps = {
  categoryList: [],
  loading: 'idle',
  error: undefined,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.categoryList = action.payload.data;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.categoryList.push(action.payload.data);
        displaySuccess('Category created successfully');
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.categoryList = state.categoryList.filter(
          (category) => category.id !== action.meta.arg
        );
        displaySuccess('Category deleted successfully');
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.categoryList = state.categoryList.map((category) =>
          category.id === action.payload.data.id ? action.payload.data : category
        );
        displaySuccess('Category updated successfully');
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = 'loading';
        }
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = 'failed';
          state.error = action.error.message || undefined;
        }
      );
  },
});

export const categorySelector = (state: RootState) => state.category;
export default categorySlice.reducer;
