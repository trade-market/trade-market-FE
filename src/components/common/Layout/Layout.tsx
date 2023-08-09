import GlobalFont from '../../../styles/GlobalFont';
import GlobalStyle from '../../../styles/GlobalStyles';
import { Wrapper } from './LayoutStyles';
import Header from '../Header';
import NavigationBar from "../NavigationBar/NavigationBar";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <Wrapper>
      <GlobalStyle />
      <GlobalFont />
      <Header />
      {children}
      <NavigationBar />
    </Wrapper>
  );
}

export default Layout;
