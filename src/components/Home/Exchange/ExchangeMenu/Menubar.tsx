import { MenubarContainer } from './ExchageMenuStyles';

interface IMenubarProps {
  activeNav ?: number;
  setActiveNav ?: React.Dispatch<React.SetStateAction<number>>;
  setSelectFilter ?: React.Dispatch<React.SetStateAction<string[]>>;
}

const Menubar = ({ activeNav, setActiveNav, setSelectFilter }: IMenubarProps) => {
  const MenuClickHandler = async () => {
    const selecFilter = activeNav === 2 ? '물물' : '재능';
    setSelectFilter(['type', selecFilter]);
  }

  return (
    <MenubarContainer>
      <div className={activeNav === 1 ? 'menu active' : 'menu'} onClick={() => { setActiveNav(1); MenuClickHandler();}}>
        물물교환
      </div>
      <div className={activeNav === 2 ? 'menu active' : 'menu'} onClick={() => { setActiveNav(2); MenuClickHandler();}}>
        재능교환
      </div>
    </MenubarContainer>
  );
};

export default Menubar;