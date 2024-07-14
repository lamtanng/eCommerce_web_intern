import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../apis/user.api';

const getUser = createAsyncThunk('user/getUser', async () => {
  const resp = await userApi.getUser();
  return resp.data;
});

export { getUser };
