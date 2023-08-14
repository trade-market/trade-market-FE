import GlobalStyle from '@/styles/GlobalStyles';
import { Wrapper } from './LayoutStyles';
import Header from '@components/common/Header/Header';
import NavigationBar from '@components/common/NavigationBar/NavigationBar';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const currentPath = window.location.pathname;
  const hideHeader = ['/auth', '/profile-setup', '/search'].includes(currentPath);
  const hideNavigation = ['/auth', '/profile-setup'].includes(currentPath);

  return (
    <Wrapper>
      <GlobalStyle />
      {!hideHeader && <Header />}
      {children}
      {!hideNavigation && <NavigationBar />}
    </Wrapper>
  );
}

export default Layout;
