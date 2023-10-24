import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import tokenService from './service/tokenService';
import Router from './Router';
import { useUser } from '@hooks/useUser';

function App() {
  const { data: user, isLoading, isError, error } = useUser();

  if (isError) {
    console.error(error);
    tokenService.clearTokens();
  }

  if (isLoading) return null;

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
