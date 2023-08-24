import SocialButton from './SocialButton';
import naverImage from '@Assets/Images/naver.png';

interface INaverLoginBtnProps {
  isSignUp: boolean;
}

function NaverLoginBtn({ isSignUp }: INaverLoginBtnProps) {
  return (
    <SocialButton
      text="네이버"
      fontcolor="#fff"
      bgcolor="#00BF18"
      ImageSrc={naverImage}
      isSignUp={isSignUp}
    />
  );
}

export default NaverLoginBtn;
