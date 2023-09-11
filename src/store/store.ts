import { configureStore } from '@reduxjs/toolkit';
import createCommentSlice from './slices/CreateCommentSlice';
import WritePostSlice from './slices/WritePostSlice';

export const store = configureStore({
  reducer: {
    createComment: createCommentSlice, 
    WritePost :WritePostSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  devTools: import.meta.env.DEV,
});
