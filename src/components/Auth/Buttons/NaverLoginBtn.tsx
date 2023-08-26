import SocialButton from './SocialButton';
import naverImage from '@Assets/Images/naver.png';

interface INaverLoginBtnProps {
  isSignUp: boolean;
}

const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
const NAVER_REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;
const STATE = 'true';
const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;

function NaverLoginBtn({ isSignUp }: INaverLoginBtnProps) {
  const onNaverSocialLogin = () => (window.location.href = NAVER_AUTH_URL);

  return (
    <SocialButton
      text="네이버"
      fontcolor="#fff"
      bgcolor="#00BF18"
      ImageSrc={naverImage}
      isSignUp={isSignUp}
      onClick={onNaverSocialLogin}
    />
  );
}

export default NaverLoginBtn;
