import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Postcomment {
  image : string;
  product: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  info: string;
}

const initialState: Postcomment = {
  image : '',
  product: '',
  category: '', 
  minPrice: 0,
  maxPrice: 0,
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
    setMinPricePost: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPricePost: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    setInfoPost: (state, action: PayloadAction<string>) => {
      state.info = action.payload;
    },
  }
});

export const { setImagePost, setProductPost, setCategoryPost, setMinPricePost, setMaxPricePost, setInfoPost} =
  createPostSlice.actions;

export default createPostSlice.reducer;
