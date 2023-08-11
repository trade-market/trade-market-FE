import * as S from './SocialButtonStyles';

interface ISocialButtonProps {
  text: string;
  bgColor: string;
  ImageSrc: string;
  fontColor?: string;
  border?: boolean;
  isSignUp: boolean;
}

function SocialButton({
  text,
  fontColor,
  border,
  bgColor,
  ImageSrc,
  isSignUp,
}: ISocialButtonProps) {
  return (
    <S.Button bgColor={bgColor} fontColor={fontColor} border={border}>
      <S.Icon src={ImageSrc} />
      {text} 계정으로 {isSignUp ? '회원가입' : '로그인'}
    </S.Button>
  );
}

export default SocialButton;
