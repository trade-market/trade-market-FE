import * as S from './SocialButtonStyles';

interface ISocialButtonProps {
  text: string;
  bgcolor: string;
  ImageSrc: string;
  fontcolor?: string;
  border?: boolean;
  isSignUp: boolean;
  onClick?: () => void;
}

function SocialButton({
  text,
  fontcolor,
  border,
  bgcolor,
  ImageSrc,
  isSignUp,
  onClick = () => {},
}: ISocialButtonProps) {
  return (
    <S.Button
      bgcolor={bgcolor}
      fontcolor={fontcolor}
      border={border ? 1 : 0}
      onClick={onClick}
    >
      <S.Icon src={ImageSrc} />
      {text} 계정으로 {isSignUp ? '회원가입' : '로그인'}
    </S.Button>
  );
}

export default SocialButton;
