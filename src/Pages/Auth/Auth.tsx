import { useState } from 'react';
import * as A from './AuthStyles';
import SocialButton from '@components/Auth/SocialButton';
import kakaoImage from '@Assets/Images/kakao.png';
import googleImage from '@Assets/Images/google.png';
import navermage from '@Assets/Images/naver.png';
import BigTitle from '@components/common/BigTitle';
import ActionButton from '@/components/common/Buttons/ActionButton';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <A.Container>
      <BigTitle>{isSignUp ? '회원 가입하기' : '로그인하기'}</BigTitle>
      <A.ButtonsContainer>
        <SocialButton
          text="구글"
          bgColor="#fff"
          border={true}
          ImageSrc={googleImage}
          isSignUp={isSignUp}
        />
        <SocialButton
          text="카카오"
          bgColor="#FFEB3C"
          ImageSrc={kakaoImage}
          isSignUp={isSignUp}
        />
        <SocialButton
          text="네이버"
          fontColor="#fff"
          bgColor="#00BF18"
          ImageSrc={navermage}
          isSignUp={isSignUp}
        />
      </A.ButtonsContainer>
      {!isSignUp && (
        <>
          <A.DividedLine />
          <A.SignUpContainer>
            <A.SmallTitle>아직 회원이 아니신가요?</A.SmallTitle>
            <ActionButton
              onClick={toggleSignUp}
              backgroundColor="white"
              borderColor="Mainblue"
            >
              회원가입
            </ActionButton>
          </A.SignUpContainer>
        </>
      )}
    </A.Container>
  );
}

export default Auth;
