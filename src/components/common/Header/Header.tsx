import CommonHeader from '../CommonHeader/CommonHeader';
import { Wrapper } from "./HeaderStyles";

const Header = () => {
  return (
    <CommonHeader>
      <Wrapper>
        <div className='location'>
          상수동
        </div>
      </Wrapper>
    </CommonHeader>
  );
};

export default Header;