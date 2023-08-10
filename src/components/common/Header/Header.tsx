import { useNavigate } from "react-router-dom";
import CommonHeader from '../CommonHeader/CommonHeader';
import { Container } from './HeaderStyles';
import search from '../../../Assets/Icons/Home/Search.svg';
import Notification from '../../../Assets/Icons/Home/Notification.svg';

const Header = () => {
  const navigate = useNavigate();
  
  if (window.location.pathname === '/auth') return null;
  
  return (
    <CommonHeader>
      <Container>
        <div className="header">
          <div className='item' onClick={() => navigate("/")}>
            <div className='location'>상수동</div>
          </div>
          <img className="item" src={search} onClick={() => navigate("/")}/>
          <img className="item" src={Notification} onClick={() => navigate("/")}/>
        </div>
      </Container>
    </CommonHeader>
  );
};

export default Header;
