import MY_able from '../../../../Assets/Icons/Home/MY_able.svg';
import MY_Disable from '../../../../Assets/Icons/Home/MY_Disable.svg';

interface INaviIconProps {
  activeNav: Number;
}

const NaviIcon = ({ activeNav, }: INaviIconProps) => {
  return (
    <> 
      {activeNav === 3 ?
        <>
          <img className="icon" src={MY_able} />
          <div className='active'>MY</div>
        </>
        :
        <>
          <img className="icon" src={MY_Disable} />
          <div>MY</div>
        </>
      } 
    </>
  );
};

export default NaviIcon;