import { createSlice } from '@reduxjs/toolkit';
import { LoadingProps } from '../../types/loading.type';
import LoginResponseProps from '../../types/loginResponse.type';
import { loginRequest } from '../actions/login.actions';
import { RootState } from '../store';
import { decodeToken } from '../../ultils/decodToken';
import AuthProps from '../../types/auth.type';
import { setStoredAuth } from '../../ultils/authToken';

export interface LoginSliceProps extends LoginResponseProps {
  loading: LoadingProps;
  error: string | undefined;
}

const initialState: LoginSliceProps = {
  accessToken: '',
  refreshToken: '',
  loading: 'idle',
  error: undefined,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.loading = 'succeeded';
        setStoredAuth(action.payload);
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginRequest.pending, (state, action) => {
        state.loading = 'loading';
      });
  },
});

export const loginSelector = (state: RootState) => state.login;
export default loginSlice.reducer;
