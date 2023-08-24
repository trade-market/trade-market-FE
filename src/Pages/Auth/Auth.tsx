import { useState } from 'react';
import * as A from './AuthStyles';
import BigTitle from '@components/common/BigTitle';
import CommonHeader from '@/components/common/CommonHeader/CommonHeader';
import GoogleLoginBtn from '@/components/Auth/Buttons/GoogleLoginBtn';
import KakaoLoginBtn from '@/components/Auth/Buttons/KakaoLoginBtn';
import NaverLoginBtn from '@/components/Auth/Buttons/NaverLoginBtn';
import { Link } from 'react-router-dom';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <>
      <CommonHeader />
      <A.Container>
        <BigTitle>{isSignUp ? '회원 가입하기' : '로그인하기'}</BigTitle>
        <A.ButtonsContainer>
          <GoogleLoginBtn isSignUp={isSignUp} />
          <KakaoLoginBtn isSignUp={isSignUp} />
          <NaverLoginBtn isSignUp={isSignUp} />
        </A.ButtonsContainer>
        {!isSignUp && (
          <>
            <A.DividedLine />
            <A.SignUpContainer>
              <A.SmallTitle>아직 회원이 아니신가요?</A.SmallTitle>
              <A.SignUpButton onClick={toggleSignUp}>회원가입</A.SignUpButton>
            </A.SignUpContainer>
          </>
        )}
      </A.Container>

      <A.GoHomeText>
        <Link to="/">홈으로 이동하기</Link>
      </A.GoHomeText>
    </>
  );
}

export default Auth;
