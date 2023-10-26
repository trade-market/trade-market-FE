import GlobalStyle from '@/styles/GlobalStyles';
import { Wrapper } from './LayoutStyles';
import Header from '@components/common/Header/Header';
import NavigationBar from '@components/common/NavigationBar/NavigationBar';
import { useWindowSize } from '@hooks/useWindowDimensions';
import { useLocation } from 'react-router-dom';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  const { pathname } = useLocation();
  const { search } = useLocation();
  const { height } = useWindowSize();

  const shouldHideComponent = (regex: RegExp) => regex.test(pathname);

  const hiddenPaths = [
    /^\/auth/,
    /^\/signup/,
    /^\/search/,
    /^\/search\/.+$/,
    /^\/oauth2\/callback/,
    /^\/articles/,
    /^\/write-post\/\w+/,
    /^\/my-page\/.+$/,
    /^\/notifications/,
    /^\/chat-list\/.+$/,
  ];

  const isHidden = hiddenPaths.some((pathRegex) =>
    shouldHideComponent(pathRegex)
  );

  const NavNotHidden = pathname === '/search' && search.length === 0; // 상세 검색페이지일 때는 네비바 hidden
  

  return (
    <Wrapper height={height}>
      <GlobalStyle />
      {!isHidden && <Header />}
      {children}
      {(!isHidden || NavNotHidden) && <NavigationBar />}
    </Wrapper>
  );
}

export default Layout;
