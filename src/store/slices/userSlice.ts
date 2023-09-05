import { User } from '@/types/UserTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState extends User {
  isLogin: boolean;
}

const initialState: UserState = {
  id: '',
  nickname: '',
  profile_image: '',
  coordinate: { lat: '', lng: '' },
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
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
