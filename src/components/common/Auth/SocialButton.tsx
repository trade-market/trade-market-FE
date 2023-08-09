import * as S from './SocialButtonStyles';

interface ISocialButtonProps {
  text: string;
  bgColor: string;
  ImageSrc: string;
  fontColor?: string;
  border?: boolean;
}

function SocialButton({
  text,
  fontColor,
  border,
  bgColor,
  ImageSrc,
}: ISocialButtonProps) {
  return (
    <S.Button bgColor={bgColor} fontColor={fontColor} border={border}>
      <S.Icon src={ImageSrc} />
      {text} 계정으로 로그인
    </S.Button>
  );
}

export default SocialButton;
