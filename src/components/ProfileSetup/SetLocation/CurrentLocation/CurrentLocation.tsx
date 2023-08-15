import * as C from './CurrentLocationStyles';
import BigTitle from '@components/common/BigTitle';
import { CompleteButton } from '@Pages/ProfileSetup/ProfileSetupStyles';
import SetCurrentLocationBtn from '../SetCurrentLocationBtn';

function CurrentLocation() {
  return (
    <C.Wrapper>
      <C.TitleContainer>
        <C.SmallTitle>현재 위치</C.SmallTitle>
        <BigTitle>서울특별시 용산구 서빙고로 17</BigTitle>
      </C.TitleContainer>
      <SetCurrentLocationBtn />
      <CompleteButton disabled={false}>이 위치로 주소 설정</CompleteButton>
    </C.Wrapper>
  );
}

export default CurrentLocation;
