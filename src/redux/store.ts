import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import loginSlice from './slices/login.slice';
import categorySlice from './slices/category.slice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    category: categorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
