import { createSlice } from '@reduxjs/toolkit';
import { tokenStorage } from '@utils/tokenStorage';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: Boolean(tokenStorage.getAccessToken()),
};

// Todo: 동네 or 유저 조회 api 나오면 수정 필요

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState) => {
      state.isLoggedIn = true;
    },
    logOut: (state: AuthState) => {
      state.isLoggedIn = false;
      tokenStorage.clearTokens();
    },
  },
});

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;
