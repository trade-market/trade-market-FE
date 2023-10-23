import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import tokenService from '@/service/tokenService';
import { logoutUser } from '@store/slices/userSlice';
import { RefreshTokenResponse } from '@/types/AuthTypes';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    const accessToken = tokenService.getAccessToken();
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
  validateStatus: (response) =>
    (response.status >= 200 && response.status <= 301) ||
    response.status === 301,
});

const baseQueryWithIntercept: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshToken = tokenService.getRefreshToken();
    const refreshResult = await baseQuery(
      {
        url: '/oauth/token',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
      api,
      extraOptions
    );

    if (refreshResult.meta.response.ok) {
      if (refreshResult.meta.response.status !== 201) {
        alert('다시 로그인해주세요. (토큰 만료)');
        api.dispatch(logoutUser());
      }
      const newAccessToken = (refreshResult.data as RefreshTokenResponse)
        .accessToken;
      tokenService.setAccessToken(newAccessToken);

      result = await baseQuery(args, api, extraOptions);
    } else {
      alert('다시 로그인해주세요. (토큰 만료)');
      api.dispatch(logoutUser());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithIntercept,
  endpoints: () => ({}),
});
