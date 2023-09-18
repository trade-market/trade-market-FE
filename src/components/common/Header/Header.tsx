import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import { Container } from './HeaderStyles';
import search from '@Assets/Icons/Home/Search.svg';
import Notification from '@Assets/Icons/Home/Notification.svg';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  return (
    <CommonHeader>
      <Container>
        <div className="header">
          <div className="item" onClick={() => navigate('/')}>
            {user.isLogin ? (
              <div className="location">{user.town}</div>
            ) : (
              <div className="location non-user">내 위치</div>
            )}
          </div>
          <img className="item" src={search} onClick={() => navigate('/')} />
          <img
            className="item"
            src={Notification}
            onClick={() => !user.isLogin && navigate('/auth')}
          />
        </div>
      </Container>
    </CommonHeader>
  );
};

export default Header;
