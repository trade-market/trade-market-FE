import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './NavigationBarStyles';
import NaviChat from './NaviMenu/NaviChat';
import NaviHome from './NaviMenu/NaviHome';
import NaviMy from './NaviMenu/NaviMy';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(2);

  return (
    <Container>
      <div
        className="item"
        onClick={() => {
          navigate('/');
          setActiveNav(1);
        }}
      >
        <NaviChat activeNav={activeNav} />
      </div>
      <div
        className="item"
        onClick={() => {
          navigate('/');
          setActiveNav(2);
        }}
      >
        <NaviHome activeNav={activeNav} />
      </div>
      <div
        className="item"
        onClick={() => {
          navigate('/');
          setActiveNav(3);
        }}
      >
        <NaviMy activeNav={activeNav} />
      </div>
    </Container>
  );
};

export default NavigationBar;
