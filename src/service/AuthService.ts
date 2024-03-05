import { BASE_URL } from '@/api/client';
import TokenService from './TokenService';
import { LoginResponse, OAuthServiceType } from '@/types/AuthTypes';
import axios from 'axios';

class AuthService {
  private authClient;

  constructor() {
    this.authClient = axios.create({
      baseURL: BASE_URL,
      timeout: 5000,
    });
  }

  async loginWithOauth(
    serviceName: OAuthServiceType,
    code: string
  ): Promise<LoginResponse> {
    const response = await this.authClient.get(
      `/oauth2/callback/${serviceName}?code=${code}${
        serviceName === 'naver' && '&state=true'
      }`
    );
    const { headers, data } = response;
    if (headers['authorization'] && headers['refresh']) {
      const accessToken = headers['authorization'].split(' ')[1];
      const refreshToken = headers['refresh'];

      TokenService.setAccessToken(accessToken);
      TokenService.setRefreshToken(refreshToken);
    }

    return data;
  }

  // Todo: api 명세서 나오면 any type 수정
  async signUp(body: any) {
    const response = await this.authClient.post('/auth/signup', body);
    const { headers, data } = response;

    const accessToken = headers['authorization'].split(' ')[1];
    const refreshToken = headers['refresh'];

    TokenService.setAccessToken(accessToken);
    TokenService.setRefreshToken(refreshToken);

    return data;
  }
}

export default new AuthService();
