import MY_able from '../../../../Assets/Icons/Home/MY_able.svg';
import MY_Disable from '../../../../Assets/Icons/Home/MY_Disable.svg';

interface INaviIconnProps {
  activeNav: Number;
}

const NaviIcon = ({ activeNav, }: INaviIconnProps) => {
  return (
    <> 
      {activeNav === 3 ?
        <>
          <img className="icon" src={MY_able} />
          <div className='active'>채팅</div>
        </>
        :
        <>
          <img className="icon" src={MY_Disable} />
          <div>채팅</div>
        </>
      } 
    </>
  );
};

export default NaviIcon;