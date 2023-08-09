import CommonHeader from '../CommonHeader/CommonHeader';
import { Container } from './HeaderStyles';
import search from '../../../Assets/Icons/Home/Search.svg';
import Notification from '../../../Assets/Icons/Home/Notification.svg';

const Header = () => {
  return (
    <CommonHeader>
      <Container>
        <div className="head">
          <div className="item">상수동</div>
          <img className="item" src={search} />
          <img className="item" src={Notification} />
        </div>
      </Container>
    </CommonHeader>
  );
};

export default Header;
