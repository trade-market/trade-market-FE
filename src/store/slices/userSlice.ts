import { User } from '@/types/UserTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState extends User {
  isLogin: boolean;
}

const initialState: UserState = {
  id: '',
  nickname: '',
  profile_image: '',
  coordinates: { latitude: '', longitude: '' },
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
    logoutUser: () => initialState,
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
