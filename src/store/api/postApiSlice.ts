import { IPost } from '@/types/PostTypes';
import { apiSlice } from './apiSlice';

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPostDetail: builder.query<IPost, string>({
      query: (id) => `/v1/posts/${id}`,
    }),
  }),
});

export const { useGetPostDetailQuery } = postApiSlice;
