import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Layout from './components/common/Layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>안녕하세요</div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
