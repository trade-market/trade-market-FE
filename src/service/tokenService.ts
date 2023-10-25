import Cookies from 'js-cookie';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

const setAccessToken = (accessToken: string) =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);

const setRefreshToken = (refreshToken: string) =>
  Cookies.set(REFRESH_TOKEN, refreshToken, {
    secure: import.meta.env.PROD,
    sameSite: 'strict',
  });

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

const getRefreshToken = () => Cookies.get(REFRESH_TOKEN);

const clearTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  Cookies.remove(REFRESH_TOKEN);
};

const setTokens = ({ accessToken, refreshToken }: Tokens) => {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};

const tokenService = {
  setAccessToken,
  setRefreshToken,
  setTokens,
  getAccessToken,
  getRefreshToken,
  clearTokens,
};

export default tokenService;