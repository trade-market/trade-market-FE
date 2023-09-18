import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as A from './AuthStyles';
import BigTitle from '@components/common/BigTitle';
import CommonHeader from '@/components/common/CommonHeader/CommonHeader';
import GoogleLoginBtn from '@/components/Auth/Buttons/GoogleLoginBtn';
import KakaoLoginBtn from '@/components/Auth/Buttons/KakaoLoginBtn';
import NaverLoginBtn from '@/components/Auth/Buttons/NaverLoginBtn';
import ActionButton from '@/components/common/Buttons/ActionButton';
import DividedLine from '@components/common/DividedLine';

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
            <DividedLine />
            <A.SignUpContainer>
              <A.SmallTitle>아직 회원이 아니신가요?</A.SmallTitle>
              <ActionButton
                onClick={toggleSignUp}
                $backgroundColor="white"
                $borderColor="Mainblue"
              >
                회원가입
              </ActionButton>
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
