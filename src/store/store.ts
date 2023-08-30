import { configureStore } from '@reduxjs/toolkit';
import createPostSlice from './slices/CreatePostSlice';

export const store = configureStore({
  reducer: {
    createPost : createPostSlice, 
  },
  devTools: import.meta.env.DEV,
});
