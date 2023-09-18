interface INaviMenuProps {
  icon: string;
  active: boolean;
  menu: string;
}

const NaviMenu = ({ icon, active, menu }: INaviMenuProps) => {
  return (
    <div className="item">
      <img className="icon" src={icon} />
      <div className={active ? 'active' : ''}>{menu}</div>
    </div>
  );
};

export default NaviMenu;
