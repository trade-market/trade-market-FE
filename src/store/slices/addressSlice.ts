// src/store/addressSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddressState {
  value: string;
}

const initialState: AddressState = {
  value: '',
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
