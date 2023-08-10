import Home_able from '../../../../Assets/Icons/Home/Home_able.svg';
import Home_Disable from '../../../../Assets/Icons/Home/Home_Disable.svg';

interface INaviIconnProps {
  activeNav: Number;
}

const NaviIcon = ({ activeNav, }: INaviIconnProps) => {
  return (
    <>
      {activeNav === 2 ?
        <>
          <img className="icon" src={Home_able} />
          <div className='active'>채팅</div>
        </>
        :
        <>
          <img className="icon" src={Home_Disable} />
          <div>채팅</div>
        </>
      } 
    </>
  );
};

export default NaviIcon;