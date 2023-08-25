import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Postcomment {
  image : string;
  product: string;
  category: string;
  price: string[];
  info: string;
}

const initialState: Postcomment = {
  image : '',
  product: '',
  category: '', 
  price: [],
  info : ''
}

// 오퍼 - 직접 작성하기 게시물
export const createPostSlice = createSlice({
  name: 'createPost',
  initialState,
  reducers: {
    setImagePost: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setProductPost: (state, action: PayloadAction<string>) => {
      state.product = action.payload;
    },
    setCategoryPost: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setPricePost: (state, action: PayloadAction<string[]>) => {
      state.price = action.payload;
    },
    setInfoPost: (state, action: PayloadAction<string>) => {
      state.info = action.payload;
    },
  }
});

export const { setImagePost, setProductPost, setCategoryPost, setPricePost, setInfoPost} =
  createPostSlice.actions;

export default createPostSlice.reducer;
