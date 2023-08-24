import SocialButton from './SocialButton';
import kakaoImage from '@Assets/Images/kakao.png';

interface IKakaoLoginBtnProps {
  isSignUp: boolean;
}

function KakaoLoginBtn({ isSignUp }: IKakaoLoginBtnProps) {
  return (
    <SocialButton
      text="카카오"
      bgcolor="#FFEB3C"
      ImageSrc={kakaoImage}
      isSignUp={isSignUp}
    />
  );
}

export default KakaoLoginBtn;
