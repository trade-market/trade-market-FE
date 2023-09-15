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

  const renderNaviMenu = (
    able: string,
    disable: string,
    activeNav: number,
    setActiveNav: React.Dispatch<React.SetStateAction<number>>,
    position: number,
    menu: string,
    loacate?: string,
    ) => (
      <NaviMenu
        able={able}
        disable={disable}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        position={position}
      menu={menu}
      loacate={loacate}
      />
  ); 

  return (
    <Container>
      {renderNaviMenu(Chat_able, Chat_Disable, activeNav, setActiveNav, 1, '채팅', `/chat-list`)}
      {renderNaviMenu(Home_able, Home_Disable, activeNav, setActiveNav, 2, '홈')}
      {renderNaviMenu(MY_able, MY_Disable, activeNav, setActiveNav, 3, 'MY', `/`)}
    </Container>
  );
};

export default NavigationBar;
