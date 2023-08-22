import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import Layout from '@components/common/Layout/Layout';
import Home from '@Pages/Home/Home';
import Auth from '@Pages/Auth/Auth';
import ProfileSetup from '@Pages/ProfileSetup/ProfileSetup';
import SetLocation from '@/Pages/ProfileSetup/SetLocation/SetLocation';
import Search from '@Pages/Search/Search';
import Articles from '@Pages/Articles/Articles';
import WriteComment from '@Pages/WriteComment/WriteComment';
import CreatePost from '@/Pages/Articles/WriteComment/CreatePost/UploadPhoto/UploadPhoto';
import GetPost from './Pages/Articles/WriteComment/GetPost';

function App() {
  const routes = [
    { path: '/', element: <Home /> },
    { path: '/auth', element: <Auth /> },
    { path: '/profile-setup/', element: <ProfileSetup /> },
    { path: '/profile-setup/set-location', element: <SetLocation /> },
    { path: '/search', element: <Search /> },
    { path: '/articles/:id', element: <Articles /> },
    { path: '/articles/:id/write-comment', element: <WriteComment /> },
    {
      path: '/articles/:id/write-comment/create-post/:number',
      element: <CreatePost />,
    },
    {
      path: '/articles/:id/write-comment/get-post/:number',
      element: <GetPost />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
