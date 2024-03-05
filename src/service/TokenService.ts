import Cookies from 'js-cookie';

class TokenService {
  setAccessToken = (accessToken: string) =>
    localStorage.setItem('accessToken', accessToken);

  setRefreshToken = (refreshToken: string) =>
    Cookies.set('refreshToken', refreshToken, {
      secure: import.meta.env.PROD,
      sameSite: 'lax',
    });

  getAccessToken = () => localStorage.getItem('accessToken');

  getRefreshToken = () => Cookies.get('refreshToken');

  clearTokens = () => {
    localStorage.removeItem('accessToken');
    Cookies.remove('refreshToken');
  };
}

export default new TokenService();
