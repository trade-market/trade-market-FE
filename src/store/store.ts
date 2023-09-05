import { configureStore } from '@reduxjs/toolkit';
import createPostSlice from './slices/CreatePostSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    createPost: createPostSlice,
    user: userSlice,
  },
  devTools: import.meta.env.DEV,
});
