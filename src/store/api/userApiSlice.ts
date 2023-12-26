import { User } from '@/types/UserTypes';
import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<User, void>({
      query: () => '/user/info',
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

export const { useGetUserInfoQuery, useUpdateUserInfoMutation } = userApiSlice;
