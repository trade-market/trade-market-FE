import {
  LoginResponse,
  NewUserResponse,
  OAuthServiceType,
  RegisterRequest,
} from '@/types/AuthTypes';
import { apiSlice } from '@/api/apiSlice';
import TokenService from '@/service/TokenService';

const HTTP_STATUS_OK = 200;
const HTTP_STATUS_MOVED_PERMANENTLY = 301;

function saveTokens(data: LoginResponse) {
  const { accessToken, refreshToken } = data;

  TokenService.setAccessToken(accessToken);
  TokenService.setRefreshToken(refreshToken);
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      LoginResponse | NewUserResponse,
      { serviceName: OAuthServiceType; code: string }
    >({
      query: ({ serviceName, code }) => ({
        url: `/login/${serviceName}?authorizationCode=${code}${
          serviceName === 'naver' && '&state=true'
        }`,
        method: 'POST',
      }),
      transformResponse: (
        response: LoginResponse | NewUserResponse,
        meta: { response: Response }
      ) => {
        if (meta.response.status === HTTP_STATUS_OK) {
          saveTokens(response as LoginResponse);
          return response;
        } else if (meta.response.status === HTTP_STATUS_MOVED_PERMANENTLY) {
          const data = response as NewUserResponse;
          return { ...data, code: HTTP_STATUS_MOVED_PERMANENTLY };
        }

        throw new Error(`Unexpected response status: ${meta.response.status}`);
      },
    }),
    signUp: builder.mutation<LoginResponse, RegisterRequest>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
      transformResponse: (response: LoginResponse) => {
        saveTokens(response as LoginResponse);
        return response;
      },
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApiSlice;
