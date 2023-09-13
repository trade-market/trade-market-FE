import { useState } from 'react';
import { Container } from './NavigationBarStyles';
import NaviMenu from './NaviMenu';
import Chat_able from '@Assets/Icons/Home/Chat_able.svg';
import Chat_Disable from '@Assets/Icons/Home/Chat_Disable.svg';
import Home_able from '@Assets/Icons/Home/Home_able.svg';
import Home_Disable from '@Assets/Icons/Home/Home_Disable.svg';
import MY_able from '@Assets/Icons/Home/MY_able.svg';
import MY_Disable from '@Assets/Icons/Home/MY_Disable.svg';

const NavigationBar = () => {
  const [activeNav, setActiveNav] = useState(2);

  return (
    <Container>
      <NaviMenu
        able={Chat_able}
        disable={Chat_Disable}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        position={1}
        menu={'채팅'}
      />
      <NaviMenu
        able={Home_able}
        disable={Home_Disable}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        position={2}
        menu={'홈'}
      />
      <NaviMenu
        able={MY_able}
        disable={MY_Disable}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        position={3}
        menu={'MY'}
      />
    </Container>
  );
};

export default NavigationBar;
