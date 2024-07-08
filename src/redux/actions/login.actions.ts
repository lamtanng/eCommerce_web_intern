import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../apis/auth.api';
import LoginProps from '../../types/login.type';
import LoginResponseProps from '../../types/loginResponse.type';

const loginRequest: AsyncThunk<LoginResponseProps, LoginProps, {}> = createAsyncThunk(
  'login/login',
  async (data: LoginProps) => {
    const resp = await login(data);
    return resp;
  },
);

export { loginRequest };
