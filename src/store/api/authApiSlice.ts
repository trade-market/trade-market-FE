import {
  LoginResponse,
  NewUserResponse,
  OAuthServiceType,
  RegisterRequest,
} from '@/types/AuthTypes';
import { apiSlice } from '@store/api/apiSlice';
import { tokenStorage } from '@utils/tokenStorage';

const HTTP_STATUS_OK = 200;

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      LoginResponse | NewUserResponse,
      { serviceName: OAuthServiceType; code: string }
    >({
      query: ({ serviceName, code }) => ({
        url: `users/login/${serviceName}?authorizationCode=${code}${
          serviceName === 'naver' ? 'naver' : ''
        }`,
        method: 'POST',
      }),
      transformResponse: (
        response: LoginResponse | NewUserResponse,
        meta: { response: Response }
      ) => {
        if (meta.response.status === HTTP_STATUS_OK) {
          const { accessToken, refreshToken } =
            response.data as LoginResponse['data'];
          tokenStorage.setTokens({ accessToken, refreshToken });

          return response;
        }

        throw new Error(`Unexpected response status: ${meta.response.status}`);
      },
    }),
    signUp: builder.mutation<LoginResponse, RegisterRequest>({
      query: (body) => ({
        url: 'users/register',
        method: 'POST',
        body,
      }),
      transformResponse: (response: LoginResponse) => {
        console.log(response);
        const { accessToken, refreshToken } = response.data;
        tokenStorage.setTokens({ accessToken, refreshToken });
        return response;
      },
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApiSlice;
