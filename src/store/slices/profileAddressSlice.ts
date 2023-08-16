import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface AddressState {
  coordinates: Coordinate;
  address: string;
}

const initialState: AddressState = {
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
  address: '',
};

export const profileAddressSlice = createSlice({
  name: 'profileAddress',
  initialState,
  reducers: {
    setProfileAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setProfileCoordinates: (state, action: PayloadAction<Coordinate>) => {
      state.coordinates = action.payload;
    },
  },
});

export const { setProfileAddress, setProfileCoordinates } =
  profileAddressSlice.actions;

export default profileAddressSlice.reducer;
