import { configureStore } from '@reduxjs/toolkit';
import profileAddressSlice from './slices/profileAddressSlice';

export const store = configureStore({
  reducer: {
    profileAddress: profileAddressSlice,
  },
  devTools: import.meta.env.DEV,
});
