import Chat_able from "../../../../Assets/Icons/Home/Chat_able.svg";
import Chat_Disable from '../../../../Assets/Icons/Home/Chat_Disable.svg';

interface INaviIconnProps {
  activeNav: Number;
}

const NaviIcon = ({ activeNav, }: INaviIconnProps) => {
  return (
    <>
      {activeNav === 1 ?
        <>
          <img className="icon" src={Chat_able} />
          <div className='active'>채팅</div>
        </>
        :
        <>
          <img className="icon" src={Chat_Disable} />
          <div>채팅</div>
        </>
      } 
    </>
  );
};

export default NaviIcon;