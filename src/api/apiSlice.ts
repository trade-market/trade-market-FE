import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import TokenService from '@/service/TokenService';

interface RefreshResponse {
  accessToken: string;
  code: number;
  message: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    const accessToken = TokenService.getAccessToken();
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
    const refreshToken = TokenService.getRefreshToken();
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
        throw new Error('refresh token expired');
      }
      const newAccessToken = (refreshResult.data as RefreshResponse)
        .accessToken;
      TokenService.setAccessToken(newAccessToken);

      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log('refresh token expired');
      //   api.dispatch(loggedOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithIntercept,
  endpoints: () => ({}),
});
