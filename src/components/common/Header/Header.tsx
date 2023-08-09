import CommonHeader from '../CommonHeader/CommonHeader';
import { Container } from "./HeaderStyles";

const Header = () => {
  return (
    <CommonHeader>
      <Container>
          <div className='location'>
            상수동
          </div>
        </Container>
    </CommonHeader>
  );
};

export default Header;