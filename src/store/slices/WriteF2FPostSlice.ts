import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  image : string[];
  provide: string;
  exchange : string;
  deadline : number[];
  ableTime: string;
  title: string;
  content: string;
  minPrice: number;
  maxPrice: number;
}

const initialState: Post = {
  image : [],
  provide: '',
  exchange : '',
  deadline : [],
  ableTime: '',
  title: '',
  content: '',
  minPrice: 0,
  maxPrice: 0,
}

// 게시물 작성하기 - 재능 - 1:1
export const createCommentPostSlice = createSlice({
  name: 'WriteF2FPost',
  initialState,
  reducers: {
    setImagePost: (state, action: PayloadAction<string[]>) => {
      state.image = action.payload;
    },
    setProvidePost: (state, action: PayloadAction<string>) => {
      state.provide = action.payload;
    },
    setExchangePost: (state, action: PayloadAction<string>) => {
      state.exchange = action.payload;
    },
    setDeadlinePost: (state, action: PayloadAction<number[]>) => {
      state.deadline = action.payload;
    },
    setAbleTimePost: (state, action: PayloadAction<string>) => {
      state.ableTime = action.payload;
    },
    setTitlePost: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setContentPost: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    setMinPricePost: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPricePost: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
  }
});

export const { setImagePost, setProvidePost, setExchangePost, setDeadlinePost, setAbleTimePost, setTitlePost, setContentPost, setMinPricePost, setMaxPricePost} =
  createCommentPostSlice.actions;

export default createCommentPostSlice.reducer;
