import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from './NavigationBarStyles';
import Chat_Disable from '../../../Assets/Icons/Home/Chat_Disable.svg';
import Home_Disable from '../../../Assets/Icons/Home/Home_Disable.svg';
import MY_Disable from '../../../Assets/Icons/Home/MY_Disable.svg';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState(1);

  // const onClickNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log(e.target.src)
  // }

  return (
    <Container>
      <div className="item" onClick={() => navigate("/")}>
        <img className="icon" src={Chat_Disable}/>
        <div>채팅</div>
      </div>
      <div className="item" onClick={() => navigate("/")}>
        <img className="icon" src={Home_Disable} />
        <div>홈</div>
      </div>
      <div className="item" onClick={() => navigate("/")}>
        <img className="icon" src={MY_Disable} />
        <div>MY</div>
      </div>
    </Container>
  );
};

export default NavigationBar;
