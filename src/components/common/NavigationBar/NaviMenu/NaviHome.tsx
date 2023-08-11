import Home_able from '@Assets/Icons/Home/Home_able.svg';
import Home_Disable from '@Assets/Icons/Home/Home_Disable.svg';

interface INaviIconProps {
  activeNav: Number;
}

const NaviIcon = ({ activeNav }: INaviIconProps) => {
  return (
    <>
      {activeNav === 2 ? (
        <>
          <img className="icon" src={Home_able} />
          <div className="active">홈</div>
        </>
      ) : (
        <>
          <img className="icon" src={Home_Disable} />
          <div>홈</div>
        </>
      )}
    </>
  );
};

export default NaviIcon;
