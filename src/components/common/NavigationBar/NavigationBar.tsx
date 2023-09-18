import { Link, useLocation } from 'react-router-dom';
import { Container } from './NavigationBarStyles';
import NaviMenu from './NaviMenu';
import Chat_able from '@Assets/Icons/Home/Chat_able.svg';
import Chat_Disable from '@Assets/Icons/Home/Chat_Disable.svg';
import Home_able from '@Assets/Icons/Home/Home_able.svg';
import Home_Disable from '@Assets/Icons/Home/Home_Disable.svg';
import MY_able from '@Assets/Icons/Home/MY_able.svg';
import MY_Disable from '@Assets/Icons/Home/MY_Disable.svg';

const NavigationBar = () => {
  const { pathname } = useLocation();

  const menuItems = [
    {
      path: '/chat',
      label: '채팅',
      iconAble: Chat_able,
      iconDisable: Chat_Disable,
    },
    { path: '/', label: '홈', iconAble: Home_able, iconDisable: Home_Disable },
    {
      path: '/my-page',
      label: 'MY',
      iconAble: MY_able,
      iconDisable: MY_Disable,
    },
  ];

  return (
    <Container>
      {menuItems.map((item) => (
        <Link key={item.path} to={item.path}>
          <NaviMenu
            icon={pathname === item.path ? item.iconAble : item.iconDisable}
            active={pathname === item.path}
            menu={item.label}
          />
        </Link>
      ))}
    </Container>
  );
};

export default NavigationBar;
