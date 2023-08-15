import KakaoMap from '@components/common/KakaoMap';
import * as S from './SetLocationStyles';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import CurrentLocation from '@components/ProfileSetup/SetLocation/CurrentLocation/CurrentLocation';

function SetLocation() {
  return (
    <>
      <CommonHeader>내 현재 위치</CommonHeader>
      <S.Wrapper>
        <KakaoMap />
        <CurrentLocation />
      </S.Wrapper>
    </>
  );
}

export default SetLocation;
