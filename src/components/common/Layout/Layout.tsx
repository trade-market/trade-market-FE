import GlobalStyle from '@/styles/GlobalStyles';
import { Wrapper } from './LayoutStyles';
import Header from '@components/common/Header/Header';
import NavigationBar from '@components/common/NavigationBar/NavigationBar';
import WriteButton from '@/components/Home/WriteButton/WriteButton';
import { useWindowSize } from '@hooks/useWindowDimensions';
import { useLocation } from 'react-router-dom';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const shouldHideComponent = (regex: RegExp) => regex.test(currentPath);

  const hiddenPaths = [
    /^\/auth/,
    /^\/profile-setup/,
    /^\/search/,
    /^\/articles\/\w+$/, // /articles/:id
  ];

  const isHidden = hiddenPaths.some((pathRegex) =>
    shouldHideComponent(pathRegex)
  );
  const { height } = useWindowSize();

  return (
    <Wrapper height={height}>
      <GlobalStyle />
      {!isHidden && <Header />}
      {children}
      {!isHidden && <WriteButton />}
      {!isHidden && <NavigationBar />}
    </Wrapper>
  );
}

export default Layout;
