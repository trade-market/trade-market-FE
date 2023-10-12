import { MenubarContainer } from './ExchageMenuStyles';

interface IMenubarProps {
  activeNav: number;
  setActiveNav: React.Dispatch<React.SetStateAction<number>>;
}

const Menubar = ({activeNav, setActiveNav}: IMenubarProps) => {
  return (
    <MenubarContainer>
      <div className={activeNav === 1 ? 'menu active' : 'menu'} onClick={() => setActiveNav(1)}>
        물물교환
      </div>
      <div className={activeNav === 2 ? 'menu active' : 'menu'} onClick={() => setActiveNav(2)}>
        재능교환
      </div>
    </MenubarContainer>
  );
};

export default Menubar;