import { configureStore } from '@reduxjs/toolkit';
import createCommentSlice from './slices/CreateCommentSlice';
import WritePostSlice from './slices/WritePostSlice';
import userSlice from './slices/userSlice';
<<<<<<< HEAD
import ChatSlice from './slices/ChatSlice';
=======
import CheckboxSlice from './slices/CheckboxSlice';
>>>>>>> 4848896ada4c10d20cbc48b4d798b2b1f9771007

export const store = configureStore({
  reducer: {
    createComment: createCommentSlice,
    WritePost: WritePostSlice,
    user: userSlice,
<<<<<<< HEAD
    chat : ChatSlice,
=======
    checkbox: CheckboxSlice,
>>>>>>> 4848896ada4c10d20cbc48b4d798b2b1f9771007
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: import.meta.env.DEV,
});
