import { configureStore } from '@reduxjs/toolkit';
import createPostSlice from './slices/CreatePostSlice';
import WriteF2FPostSlice from './slices/WriteF2FPostSlice';

export const store = configureStore({
  reducer: {
    createPost: createPostSlice, 
    WriteF2FPost :WriteF2FPostSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  devTools: import.meta.env.DEV,
});
