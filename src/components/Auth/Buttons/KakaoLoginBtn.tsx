import SocialButton from './SocialButton';
import kakaoImage from '@Assets/Images/kakao.png';

interface IKakaoLoginBtnProps {
  isSignUp: boolean;
}

const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;

function KakaoLoginBtn({ isSignUp }: IKakaoLoginBtnProps) {
  const onKakaoSocialLogin = () => (window.location.href = KAKAO_AUTH_URL);

  return (
    <SocialButton
      text="카카오"
      bgcolor="#FFEB3C"
      ImageSrc={kakaoImage}
      isSignUp={isSignUp}
      onClick={onKakaoSocialLogin}
    />
  );
}

export default KakaoLoginBtn;
