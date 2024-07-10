import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../apis/user.api';

const getProfile = createAsyncThunk('user/getProfile', async () => {
  const resp = await userApi.getProfile();
  return resp.data;
});

export { getProfile };
