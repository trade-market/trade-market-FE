import KakaoMap from '@components/ProfileSetup/SetLocation/KakaoMap';
import * as S from './SetLocationStyles';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';

function SetLocation() {
  return (
    <>
      <CommonHeader>내 동네 위치</CommonHeader>
      <S.Wrapper>
        <KakaoMap />
      </S.Wrapper>
    </>
  );
}

export default SetLocation;
