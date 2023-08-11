import GlobalStyle from '@/styles/GlobalStyles';
import { Wrapper } from './LayoutStyles';
import Header from '@components/common/Header/Header';
import NavigationBar from '@components/common/NavigationBar/NavigationBar';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const currentPath = window.location.pathname;
  const hideComponents = ['/auth', '/profile-setup'].includes(currentPath);

  return (
    <Wrapper>
      <GlobalStyle />
      {!hideComponents && <Header />}
      {children}
      {!hideComponents && <NavigationBar />}
    </Wrapper>
  );
}

export default Layout;
