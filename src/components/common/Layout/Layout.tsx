import GlobalStyle from '@/styles/GlobalStyles';
import { Wrapper } from './LayoutStyles';
import Header from '@components/common/Header/Header';
import NavigationBar from '@components/common/NavigationBar/NavigationBar';
import WriteButton from '@/components/Home/WriteButton';
import { useWindowSize } from '@hooks/useWindowDimensions';
import { useLocation } from 'react-router-dom';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const { pathname } = useLocation();

  const shouldHideComponent = (regex: RegExp) => regex.test(pathname);

  const hiddenPaths = [
    /^\/auth/,
    /^\/signup/,
    /^\/search/,
    /^\/oauth2\/callback/,
    /^\/articles/,
    /^\/write-post\/\w+/,
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
      {!isHidden && <NavigationBar />}
    </Wrapper>
  );
}

export default Layout;
