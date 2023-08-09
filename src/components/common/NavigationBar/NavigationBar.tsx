import { Container } from './NavigationBarStyles';
import chat from '../../../Assets/Icons/Home/Chat_Disable.svg';
import home from '../../../Assets/Icons/Home/Home_Disable.svg';
import my from '../../../Assets/Icons/Home/MY_Disable.svg';

const NavigationBar = () => {
  return (
    <Container>
      <div className="item">
        <img className="icon" src={chat} />
        <div>채팅</div>
      </div>
      <div className="item">
        <img className="icon" src={home}  />
        <div>홈</div>
      </div>
      <div className="item">
        <img className="icon" src={my} />
        <div>MY</div>
      </div>
    </Container>
  );
};

export default NavigationBar;
