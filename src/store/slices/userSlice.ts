import { User } from '@/types/UserTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState extends User {
  isLogin: boolean;
}

const initialState: UserState = {
  id: '',
  nickname: '',
  profile_image: '',
  coordinates: { lat: '', lng: '' },
  grade: null,
  town: '',
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...action.payload, isLogin: true };
    },
    logoutUser: (state) => {
      state.id = '';
      state.nickname = '';
      state.profile_image = '';
      state.coordinates.lat = '';
      state.coordinates.lng = '';
      state.grade = null;
      state.town = '';
      state.isLogin = false;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
