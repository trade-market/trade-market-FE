import * as C from './CurrentLocationStyles';
import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import BigTitle from '@components/common/BigTitle';
import { CompleteButton } from '@Pages/ProfileSetup/ProfileSetupStyles';
import SetCurrentLocationBtn from '../SetCurrentLocationBtn';
import { useNavigate } from 'react-router-dom';

function CurrentLocation() {
  const address = useSelector((state: RootState) => state.address.value);
  const navigate = useNavigate();
  const handleComplete = () => {
    navigate(-1);
  };

  return (
    <C.Wrapper>
      <C.TitleContainer>
        <C.SmallTitle>현재 동네</C.SmallTitle>
        <BigTitle>{address}</BigTitle>
      </C.TitleContainer>
      <SetCurrentLocationBtn />
      <CompleteButton disabled={false} onClick={handleComplete}>
        이 동네로 설정
      </CompleteButton>
    </C.Wrapper>
  );
}

export default CurrentLocation;
