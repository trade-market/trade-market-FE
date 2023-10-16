import { useEffect } from 'react';
import { MenubarContainer } from './ExchageMenuStyles';
import useQueryString from '@hooks/useQueryString';

interface IMenubarProps {
  activeNav?: number;
  setActiveNav?: React.Dispatch<React.SetStateAction<number>>;
  setSelectFilter?: React.Dispatch<React.SetStateAction<string[]>>;
}

const Menubar = ({ activeNav, setActiveNav, setSelectFilter }: IMenubarProps) => {
  const type = useQueryString('type');
  const Querytype = 'type';

  const MenuClickHandler = () => {
    const selectFilter = activeNav === 0 ? '물물' : '재능';
    setSelectFilter(() => [Querytype, selectFilter]);
  }

  //* 홈에서 카테고리 선택으로 넘어온 경우
  useEffect(() => {
    type === '재능' ? setActiveNav(1) : setActiveNav(0);
  }, [type]);

  return (
    <MenubarContainer>
      <div className={activeNav === 0 ? 'menu active' : 'menu'} onClick={() => { setActiveNav(0); MenuClickHandler();}}>
        물물교환
      </div>
      <div className={activeNav === 1 ? 'menu active' : 'menu'} onClick={() => { setActiveNav(1); MenuClickHandler();}}>
        재능교환
      </div>
    </MenubarContainer>
  );
};

export default Menubar;