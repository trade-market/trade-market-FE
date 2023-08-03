import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
    app
    </ThemeProvider>
    )
}

export default App;
