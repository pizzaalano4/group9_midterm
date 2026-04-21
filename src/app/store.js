import { configureStore } from '@reduxjs/toolkit';
import { tvApi } from '../services/tvApi';

export const store = configureStore({
  reducer: {
    [tvApi.reducerPath]: tvApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tvApi.middleware),
});