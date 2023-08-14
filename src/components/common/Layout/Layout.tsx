import GlobalStyle from '@/styles/GlobalStyles';
import { Wrapper } from './LayoutStyles';
import Header from '@components/common/Header/Header';
import NavigationBar from '@components/common/NavigationBar/NavigationBar';
import WriteButton from '@/components/Home/WriteButton/WriteButton';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const currentPath = window.location.pathname;
  const hideHeader = ['/auth', '/profile-setup', '/search'].includes(currentPath);
  const hideNavigation = ['/auth', '/profile-setup'].includes(currentPath);
  const hideWriteButton = ['/auth', '/profile-setup'].includes(currentPath);

  return (
    <Wrapper>
      <GlobalStyle />
      {!hideHeader && <Header />}
      {children}
      {!hideWriteButton && <WriteButton />}
      {!hideNavigation && <NavigationBar />}
    </Wrapper>
  );
}

export default Layout;
