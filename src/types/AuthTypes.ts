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
  accessToken: string;
  refreshToken: string;
}

export interface NewUserResponse {
  code?: number;
  authId: string;
  authType: OAuthServiceType;
  nickname: string;
  profileImage: string;
}

export interface RegisterRequest {
  authId: string;
  authType: OAuthServiceType;
  nickname: string;
  profileImage: string;
  imageFile: File;
  latitude: string;
  longitude: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  code: number;
  message: string;
}
