import * as A from './AuthStyles';
import SocialButton from '../../components/common/Auth/SocialButton';
import kakaoImage from '../../Assets/Images/kakao.png';
import googleImage from '../../Assets/Images/google.png';
import navermage from '../../Assets/Images/naver.png';

function Auth() {
  return (
    <A.Container>
      <A.Title>로그인하기</A.Title>
      <A.ButtonsContainer>
        <SocialButton
          text="구글"
          bgColor="#fff"
          border={true}
          ImageSrc={googleImage}
        />
        <SocialButton text="카카오" bgColor="#FFEB3C" ImageSrc={kakaoImage} />
        <SocialButton
          text="네이버"
          fontColor="#fff"
          bgColor="#00BF18"
          ImageSrc={navermage}
        />
      </A.ButtonsContainer>
    </A.Container>
  );
}

export default Auth;
