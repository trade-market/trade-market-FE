import axios, { AxiosError } from 'axios';
import TokenService from '@/service/TokenService';

export const BASE_URL = 'http://localhost:5173'; // Todo: 서버 배포되면 환경변수로 설정

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

client.interceptors.request.use((config) => {
  const accessToken = TokenService.getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = TokenService.getRefreshToken();

      try {
        const res = await client.post('/auth/token', { refreshToken });
        const newAccessToken = res.headers['authorization'].split(' ')[1];
        TokenService.setAccessToken(newAccessToken);
        return client(originalRequest);
      } catch (err) {
        const axiosErr = err as AxiosError;
        if (axiosErr.response && axiosErr.response.status === 403) {
          TokenService.clearTokens();
          alert('토큰이 만료되어 로그아웃 되었습니다.');
          window.location.href = '/auth';
        }
      }
    }

    return Promise.reject(error);
  }
);

export default client;
