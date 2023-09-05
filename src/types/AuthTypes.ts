import { NewUserInfo, User } from './UserTypes';

export interface LoginResponse {
  code: number;
  message: string;
  isNew: boolean;
  user: User | NewUserInfo;
}

export type OAuthServiceType = 'google' | 'naver' | 'kakao';
