import { configureStore } from '@reduxjs/toolkit';
import createCommentSlice from './slices/CreateCommentSlice';
import WritePostSlice from './slices/WritePostSlice';
import ChatSlice from './slices/ChatSlice';
import CheckboxSlice from './slices/checkboxSlice';
import { apiSlice } from '@store/api/apiSlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    createComment: createCommentSlice,
    WritePost: WritePostSlice,
    chat: ChatSlice,
    checkbox: CheckboxSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
  devTools: import.meta.env.DEV,
});
