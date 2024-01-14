import { UserResponse } from '@/types/UserTypes';
import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserResponse, void>({
      query: () => '/users',
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
