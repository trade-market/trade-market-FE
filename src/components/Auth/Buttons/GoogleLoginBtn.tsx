import googleImage from '@Assets/Images/google.png';
import SocialButton from './SocialButton';

interface IGoogleLoginBtnProps {
  isSignUp: boolean;
}

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`;

function GoogleLoginBtn({ isSignUp }: IGoogleLoginBtnProps) {
  const onGoogleSocialLogin = () => (window.location.href = GOOGLE_AUTH_URL);
  return (
    <SocialButton
      text="구글"
      bgcolor="#fff"
      border={true}
      ImageSrc={googleImage}
      isSignUp={isSignUp}
      onClick={onGoogleSocialLogin}
    />
  );
}

export default GoogleLoginBtn;
