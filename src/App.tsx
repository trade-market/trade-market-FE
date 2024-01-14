import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { tokenStorage } from './utils/tokenStorage';
import Router from './Router';
import { useUser } from '@hooks/useUser';

function App() {
  const { isLoading, isError, error } = useUser();

  if (isError) {
    console.error(error);
    tokenStorage.clearTokens();
  }

  if (isLoading) return null;

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
