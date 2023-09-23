import { configureStore } from '@reduxjs/toolkit';
import createCommentSlice from './slices/CreateCommentSlice';
import WritePostSlice from './slices/WritePostSlice';
import userSlice from './slices/userSlice';
import CheckboxSlice from './slices/CheckboxSlice';

export const store = configureStore({
  reducer: {
    createComment: createCommentSlice,
    WritePost: WritePostSlice,
    user: userSlice,
    checkbox: CheckboxSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: import.meta.env.DEV,
});
