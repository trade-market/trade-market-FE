import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Layout from './components/common/Layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
