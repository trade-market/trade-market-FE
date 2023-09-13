import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import UserService from './service/UserService';
import { setUser } from '@store/slices/userSlice';
import TokenService from './service/TokenService';
import Router from './Router';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      const token = TokenService.getAccessToken();
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const data = await UserService.getUserInfo();
        dispatch(setUser({ ...data.user, isLogin: true }));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getUserInfo();
  }, []);

  if (isLoading) return null;

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
