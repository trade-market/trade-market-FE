import { RootState } from '@store/types';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useDaumPostcodePopup, Address } from 'react-daum-postcode';
import * as P from '@Pages/ProfileSetup/ProfileSetupStyles';
import BigTitle from '@components/common/BigTitle';
import BlueButton from '@/components/common/Buttons/BlueButton';

function AddressSetting() {
  const address = useSelector(
    (state: RootState) => state.profileAddress.address
  );
  const navigate = useNavigate();
  const open = useDaumPostcodePopup();

  const handleComplete = (data: Address) => {
    navigate('set-location', { state: { address: data.address } });
  };

  const handleSearchBtnClick = () => {
    open({ onComplete: handleComplete });
  };

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
        <BlueButton disabled={false} onClick={handleSearchBtnClick}>
          검색
        </BlueButton>
      </P.InputContainer>
      <Link to="set-location">
        <P.CurrentLocationBtn>현재 동네로 설정</P.CurrentLocationBtn>
      </Link>
    </P.Section>
  );
}

export default AddressSetting;
