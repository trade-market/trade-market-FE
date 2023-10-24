import { User } from '@/types/UserTypes';
import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<User, void>({
      query: () => '/user/info',
    }),
    checkNicknameDuplication: builder.mutation({
      query: (nickname) => ({
        url: '/user/nickname/',
        method: 'POST',
        body: { nickname },
      }),
    }),
    updateUserInfo: builder.mutation({
      query: (body) => ({
        url: '/user/update',
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useCheckNicknameDuplicationMutation,
  useUpdateUserInfoMutation,
} = userApiSlice;
