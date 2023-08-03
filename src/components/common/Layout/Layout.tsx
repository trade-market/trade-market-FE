import GlobalFont from '../../../styles/GlobalFont';
import GlobalStyle from '../../../styles/GlobalStyles';
import { Wrapper } from './LayoutStyles';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <Wrapper>
      <GlobalStyle />
      <GlobalFont />
      {children}
    </Wrapper>
  );
}

export default Layout;
