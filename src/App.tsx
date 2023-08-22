import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import Layout from '@components/common/Layout/Layout';
import Home from '@Pages/Home/Home';
import Auth from '@Pages/Auth/Auth';
import ProfileSetup from '@Pages/ProfileSetup/ProfileSetup';
import SetLocation from '@/Pages/ProfileSetup/SetLocation/SetLocation';
import Search from '@Pages/Search/Search';
import CreateOwnOffer from '@/Pages/Offer/CreateOwnOffer/CreateOwnOffer';

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
            <Route path="/offer/create-own-offer" element={<CreateOwnOffer />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
