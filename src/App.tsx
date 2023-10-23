import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import UserService from './service/UserService';
import { setUser } from '@store/slices/userSlice';
import tokenService from './service/tokenService';
import Router from './Router';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      const token = tokenService.getAccessToken();
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const user = await UserService.getUserInfo();
        dispatch(setUser({ ...user, isLogin: true }));
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
