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
import WriteComment from '@/Pages/WriteComment/WriteComment';
import WriteOwnself from "@/Pages/WriteComment/CreatePost/UploadPhoto/UploadPhoto";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile-setup/" element={<ProfileSetup />} />
            <Route
              path="/profile-setup/set-location"
              element={<SetLocation />}
            />
            <Route path="/search" element={<Search />} />
            <Route path="/articles/:id" element={<Articles />} />
            <Route
              path="/articles/:id/write-comment"
              element={<WriteComment />}
            />
            {/* 오퍼페이지 작업용 임시 경로 생성 */}
            <Route path='/articles/2' element={<WriteOwnself />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
