import React from 'react';
import UnreadChatNav from './UnreadChatNav';

interface INaviMenuProps {
  icon: string;
  active: boolean;
  menu: string;
  loacate?: string;
}

const NaviMenu = ({ icon, active, menu }: INaviMenuProps) => {
  return (
    <div className="item">
      {menu === '채팅' && <UnreadChatNav />}
      <img className="icon" src={icon} />
      <div className={active ? 'active' : ''}>{menu}</div>
    </div>
  );
};

export default NaviMenu;
