import * as C from './CurrentLocationStyles';
import BigTitle from '@components/common/BigTitle';
import { CompleteButton } from '@Pages/ProfileSetup/ProfileSetupStyles';
import SetCurrentLocationBtn from '../SetCurrentLocationBtn';

interface ICurrentLocationProps {
  address: string;
}

function CurrentLocation({ address }: ICurrentLocationProps) {
  return (
    <C.Wrapper>
      <C.TitleContainer>
        <C.SmallTitle>현재 위치</C.SmallTitle>
        <BigTitle>{address}</BigTitle>
      </C.TitleContainer>
      <SetCurrentLocationBtn />
      <CompleteButton disabled={false}>이 위치로 주소 설정</CompleteButton>
    </C.Wrapper>
  );
}

export default CurrentLocation;
