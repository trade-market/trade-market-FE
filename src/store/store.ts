// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import addressSlice from './slices/addressSlice';

export const store = configureStore({
  reducer: {
    address: addressSlice,
  },
});
