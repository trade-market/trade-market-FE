import { useState } from 'react';
import { useDaumPostcodePopup, Address } from 'react-daum-postcode';
import styled from 'styled-components';
import * as P from '@Pages/ProfileSetup/ProfileSetupStyles';
import BigTitle from '@components/common/BigTitle';
import BlueButton from '@/components/common/Buttons/BlueButton';
import KakaoMap from './KakaoMap';
import { size } from '@/styles/theme';
import { Coordinates } from '@/Pages/ProfileSetup/ProfileSetup';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import ActionButton from '@components/common/Buttons/ActionButton';

const MapContainer = styled.div`
  position: absolute;
  max-width: ${size.mobile};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;

  animation: bottomUp 0.3s ease;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes bottomUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

interface IAddressSettingProps {
  selectedAddress: string;
  handleAddressSelect: (address: string) => void;
  handleCoordinates: (coordinates: Coordinates) => void;
}

function AddressSetting({
  selectedAddress,
  handleAddressSelect,
  handleCoordinates,
}: IAddressSettingProps) {
  const open = useDaumPostcodePopup();

  const [addressModalOpen, setAddressModalOpen] = useState(false);

  const closeAddressModal = () => {
    setAddressModalOpen(false);
  };

  const handelCurrentLocationBtnClick = () => {
    if (selectedAddress.length > 0) {
      handleAddressSelect('');
    }
    setAddressModalOpen(true);
  };

  const handleComplete = (data: Address) => {
    setAddressModalOpen(true);
    handleAddressSelect(data.address);
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
          value={selectedAddress}
          disabled={true}
        />
        <BlueButton disabled={false} onClick={handleSearchBtnClick}>
          검색
        </BlueButton>
      </P.InputContainer>
      <ActionButton
        onClick={handelCurrentLocationBtnClick}
        backgroundColor="white"
        borderColor="Mainblue"
      >
        현재 동네로 설정
      </ActionButton>
      {addressModalOpen && (
        <MapContainer>
          <CommonHeader
            onClick={() => {
              handleAddressSelect('');
              closeAddressModal();
            }}
          >
            현재 동네
          </CommonHeader>
          <KakaoMap
            selectedAddress={selectedAddress}
            handleAddressSelect={handleAddressSelect}
            handleCoordinates={handleCoordinates}
            closeAddressModal={closeAddressModal}
          />
        </MapContainer>
      )}
    </P.Section>
  );
}

export default AddressSetting;
