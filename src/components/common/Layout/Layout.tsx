import GlobalFont from '../../../styles/GlobalFont';
import GlobalStyle from '../../../styles/GlobalStyles';
import { Wrapper } from './LayoutStyles';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const currentPath = window.location.pathname;
  const hideComponents = ['/auth', '/profile-setup'].includes(currentPath);

  return (
    <Wrapper>
      <GlobalStyle />
      <GlobalFont />
      {!hideComponents && <Header />}
      {children}
      {!hideComponents && <NavigationBar />}
    </Wrapper>
  );
}

export default Layout;
