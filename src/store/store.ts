import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@store/api/apiSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import ChatSlice from './slices/ChatSlice';
import createCommentSlice from './slices/CreateCommentSlice';
import WritePostSlice from './slices/WritePostSlice';
import CheckboxSlice from './slices/checkboxSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
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

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
