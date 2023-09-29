import ChatActive from './ChatActive';

interface INaviMenuProps {
  icon: string;
  active: boolean;
  menu: string;
  loacate?: string;
}

const NaviMenu = ({ icon, active, menu }: INaviMenuProps) => {
  console.log(menu)

  return (
    <div className="item">
      { menu === '채팅' && <ChatActive /> }
      <img className="icon" src={icon} />
      <div className={active ? 'active' : ''}>{menu}</div>
    </div>
  );
};

export default NaviMenu;
