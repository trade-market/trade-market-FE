import { configureStore } from '@reduxjs/toolkit';
import createCommentSlice from './slices/CreateCommentSlice';
import WritePostSlice from './slices/WritePostSlice';
import userSlice from './slices/userSlice';
import ChatSlice from './slices/ChatSlice';
import CheckboxSlice from './slices/checkboxSlice';

export const store = configureStore({
  reducer: {
    createComment: createCommentSlice,
    WritePost: WritePostSlice,
    user: userSlice,
    chat : ChatSlice,
    checkbox: CheckboxSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: import.meta.env.DEV,
});
