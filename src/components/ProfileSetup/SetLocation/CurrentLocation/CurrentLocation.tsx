import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import * as C from './CurrentLocationStyles';
import BigTitle from '@components/common/BigTitle';
import BlueButton from '@/components/common/Buttons/BlueButton';

function CurrentLocation() {
  const address = useSelector(
    (state: RootState) => state.profileAddress.address
  );
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
      <BlueButton disabled={false} onClick={handleComplete} maxWidth="100%">
        이 동네로 설정
      </BlueButton>
    </C.Wrapper>
  );
}

export default CurrentLocation;
