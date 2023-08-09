import CommonHeader from '../CommonHeader/CommonHeader';
import { Container } from './HeaderStyles';
import search from '../../../Assets/Icons/HomeScreen/Search.svg';
import temp from '../../../Assets/Icons/HomeScreen/MY_Black.svg';

const Header = () => {
  return (
    <CommonHeader>
      <Container>
        <div className="head">
          <div className="item">상수동</div>
          <img className="item" src={search} />
          <img className="item" src={temp} />
        </div>
      </Container>
    </CommonHeader>
  );
};

export default Header;
