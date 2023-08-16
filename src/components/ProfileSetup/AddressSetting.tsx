import { RootState } from '@store/types';
import { useSelector } from 'react-redux';
import BigTitle from '@components/common/BigTitle';
import * as P from '@Pages/ProfileSetup/ProfileSetupStyles';
import { Link } from 'react-router-dom';

function AddressSetting() {
  const address = useSelector((state: RootState) => state.address.value);
  return (
    <P.Section>
      <BigTitle>동네 설정</BigTitle>
      <P.InputContainer>
        <P.Input
          type="text"
          placeholder="지번, 도로명, 건물명으로 검색"
          value={address}
          disabled={true}
        />
        <P.Button disabled={false}>검색</P.Button>
      </P.InputContainer>
      <Link to="set-location">
        <P.CurrentLocationBtn>현재 동네로 설정</P.CurrentLocationBtn>
      </Link>
    </P.Section>
  );
}

export default AddressSetting;
