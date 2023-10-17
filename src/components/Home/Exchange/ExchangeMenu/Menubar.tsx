import { useEffect } from 'react';
import { MenubarContainer } from './ExchageMenuStyles';
import useQueryString from '@hooks/useQueryString';

interface IMenubarProps {
  activeNav: number;
  setActiveNav: React.Dispatch<React.SetStateAction<number>>;
  setSelectFilter?: React.Dispatch<React.SetStateAction<string[]>>;
}

const Menubar = ({ activeNav, setActiveNav, setSelectFilter }: IMenubarProps) => {
  const type = useQueryString('type');
  const Menues = ['물물교환', '재능교환'];

  const MenuClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const newActiveNav = e.currentTarget.id === '물물' ? 0 : 1;
    setActiveNav(newActiveNav);
    (setSelectFilter && setSelectFilter(['type', e.currentTarget.id]));
  }

  //* 홈에서 카테고리 선택으로 넘어온 경우
  useEffect(() => {
    type === '재능' ? setActiveNav(1) : setActiveNav(0);
  }, [type]);

  return (
    <MenubarContainer>
      {Menues.map((menu, i) => (
        <div
          key={i}
          id={menu.slice(0, 2)}
          className={activeNav === i ? 'menu active' : 'menu'}
          onClick={(e) => MenuClickHandler(e)}
          >{menu}
        </div>
      ))}
    </MenubarContainer>
  );
};

export default Menubar;