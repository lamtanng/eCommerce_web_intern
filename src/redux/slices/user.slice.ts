import { createSlice } from '@reduxjs/toolkit';
import { userIDKey } from '../../constants/localStorageKeys';
import { RejectedAction } from '../../types/actionState.type';
import { LoadingProps } from '../../types/loading.type';
import UserProps from '../../types/user.type';
import { getUser } from '../actions/user.actions';
import { RootState } from '../store';

export interface UserSliceProps {
  user: UserProps;
  loading: LoadingProps;
  error: string | undefined;
}
const initialState: UserSliceProps = {
  user: {} as UserProps,
  loading: 'idle',
  error: undefined,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.user = action.payload;
        localStorage.setItem(userIDKey, String(action.payload.id));
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
        },
      );
  },
});

export default userSlice.reducer;
export const userSelector = (state: RootState) => state.user;
