import { Container } from './NavigationBarStyles';
import chat from '../../../Assets/Icons/HomeScreen/Chat_Disable.svg';
import home from '../../../Assets/Icons/HomeScreen/Home_Disable.svg';
import my from '../../../Assets/Icons/HomeScreen/MY_Disable.svg';

const NavigationBar = () => {
  return (
    <Container>
      <div className="item">
        <img className="icon" src={chat} />
        <div>채팅</div>
      </div>
      <div className="item">
        <img className="icon" src={require('./src_assets/logo192.png').default}  />
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
