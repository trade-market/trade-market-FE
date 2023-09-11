import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import Layout from '@components/common/Layout/Layout';
import Home from '@Pages/Home/Home';
import Auth from '@Pages/Auth';
import SignUp from '@Pages/SingUp';
import Search from '@Pages/Search/Search';
import Articles from '@Pages/Articles';
import WriteComment from '@Pages/WriteComment';
import Progress2 from '@/Pages/Articles/WriteComment/CreatePost/Progress2/Progress2';
import Progress3 from './Pages/Articles/WriteComment/CreatePost/Progress3/Progress3';
import Progress4 from './Pages/Articles/WriteComment/CreatePost/Progress4/Progress4';
import Progress5 from './Pages/Articles/WriteComment/CreatePost/Progress5/Progress5';
import Progress6 from './Pages/Articles/WriteComment/CreatePost/Progress6/Progress6';
import InsertPostLink from '@Pages/Articles/WriteComment/GetPost/InsertPostLink';
import MyPosts from '@Pages/Articles/WriteComment/GetPost/MyPosts';
import FinalCheck from '@Pages/Articles/WriteComment/GetPost/FinalCheck';
import ScrollToTop from '@utils/ScrollToTop';
import OAuthRedirectHandler from '@components/Auth/OAuthRedirectHandler';
import UserService from './service/UserService';
import { setUser } from '@store/slices/userSlice';
import TokenService from './service/TokenService';

function App() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/auth', element: <Auth /> },
    {
      path: '/oauth2/callback/kakao',
      element: <OAuthRedirectHandler service="kakao" />,
    },
    {
      path: '/oauth2/callback/google',
      element: <OAuthRedirectHandler service="google" />,
    },
    {
      path: '/oauth2/callback/naver',
      element: <OAuthRedirectHandler service="naver" />,
    },
    { path: '/auth', element: <Auth /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/search', element: <Search /> },
    { path: '/articles/:id', element: <Articles /> },
    { path: '/articles/:id/write-comment', element: <WriteComment /> },
    {
      path: '/articles/:id/write-comment/get-post/2',
      element: <InsertPostLink />,
    },
    {
      path: '/articles/:id/write-comment/get-post/3',
      element: <FinalCheck />,
    },
    {
      path: '/articles/:id/write-comment/get-post/2/my-posts',
      element: <MyPosts />,
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    const getUserInfo = async () => {
      const token = TokenService.getAccessToken();
      if (!token) return;
      try {
        const data = await UserService.getUserInfo();
        dispatch(setUser({ ...data.user, isLogin: true }));
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
            <Route path="/articles/:id/write-comment/create-post">
              <Route path="2" element={<Progress2 />} />
              <Route path="3" element={<Progress3 />} />
              <Route path="4" element={<Progress4 />} />
              <Route path="5" element={<Progress5 />} />
              <Route path="6" element={<Progress6 />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
