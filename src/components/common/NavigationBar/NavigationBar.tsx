import { Container } from './NavigationBarStyles';
import chat from '../../../Assets/Icons/홈 화면/채팅_비활성화.svg';
import home from '../../../Assets/Icons/홈 화면/홈_비활성화.svg';
import my from '../../../Assets/Icons/홈 화면/MY_비활성화.svg';

const NavigationBar = () => {
  return (
    <Container>
      <div className='item'>
        <img className='icon' src={chat} />
        <div>채팅</div>
      </div>
      <div className='item'>
        <img className='icon' src={home} />
        <div>홈</div>
      </div>
      <div className='item'>
        <img className='icon' src={my} />
        <div>MY</div>
      </div>
    </Container>
  );
};

export default NavigationBar;