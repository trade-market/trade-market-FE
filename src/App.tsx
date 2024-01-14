import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { tokenStorage } from './utils/tokenStorage';
import Router from './Router';
import { useUser } from '@hooks/useUser';
import Spinner from '@components/Auth/Spinner';

function App() {
  const { isLoading, isError, error } = useUser();

  if (isError) {
    console.error(error);
    tokenStorage.clearTokens();
  }

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? <Spinner /> : <Router />}
    </ThemeProvider>
  );
}

export default App;
