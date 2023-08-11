import React from 'react';
import BigTitle from '../../components/common/BigTitle';
import * as P from '../../Pages/ProfileSetup/ProfileSetupStyles';

interface AddressSettingProps {
  address: string;
  handleAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressSetting: React.FC<AddressSettingProps> = ({
  address,
  handleAddress,
}) => {
  // Todo: 현재 위치로 설정 버튼 클릭시 위치 설정하는 지도 페이지로 이동
  return (
    <P.Section>
      <BigTitle>지역 설정</BigTitle>
      <P.InputContainer>
        <P.Input
          type="text"
          placeholder="지번, 도로명, 건물명으로 검색"
          value={address}
          onChange={handleAddress}
        />
        <P.Button disabled={address.length === 0}>검색</P.Button>
      </P.InputContainer>
      <P.CurrentLocationBtn>현재 위치로 설정</P.CurrentLocationBtn>
    </P.Section>
  );
};

export default AddressSetting;
