import googleImage from '@Assets/Images/google.png';
import SocialButton from './SocialButton';

interface IGoogleLoginBtnProps {
  isSignUp: boolean;
}

function GoogleLoginBtn({ isSignUp }: IGoogleLoginBtnProps) {
  return (
    <SocialButton
      text="구글"
      bgcolor="#fff"
      border={true}
      ImageSrc={googleImage}
      isSignUp={isSignUp}
    />
  );
}

export default GoogleLoginBtn;
