export type OAuthServiceType =
  | 'GOOGLE'
  | 'NAVER'
  | 'KAKAO'
  | 'google'
  | 'naver'
  | 'kakao';
export interface LoginResponse {
  code: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface NewUserResponse {
  code?: number;
  message: string;
  data: {
    authId: string;
    authType: OAuthServiceType;
    nickname: string;
    profileImage: string;
  };
}

export interface RegisterRequest {
  authId: string;
  authType: OAuthServiceType;
  nickname: string;
  profileImage: string;
  addressRequest: {
    name: string;
    latitude: number;
    longitude: number;
    type: string;
  };
}

export interface AccessTokenToRefreshTokenResponse {
  data: string;
  code: number;
  message: string;
}
