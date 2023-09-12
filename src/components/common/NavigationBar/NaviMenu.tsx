import { useNavigate } from 'react-router-dom';

interface INaviMenuProps {
  able: string;
  disable: string;
  activeNav: number;
  position: number;
  setActiveNav: React.Dispatch<React.SetStateAction<number>>;
  menu: string;
}

const NaviMenu = ({
  able,
  disable,
  activeNav,
  position,
  setActiveNav,
  menu,
}: INaviMenuProps) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (position === 2) navigate('/');
    if (position === 3) navigate('/my-page');
    setActiveNav(position);
  };

  return (
    <div className="item" onClick={handleNavigation}>
      <img className="icon" src={activeNav === position ? able : disable} />
      <div className={activeNav === position ? 'active' : ''}>{menu}</div>
    </div>
  );
};

export default NaviMenu;
