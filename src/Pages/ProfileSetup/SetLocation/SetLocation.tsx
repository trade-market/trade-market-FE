import KakaoMap from '@components/common/KakaoMap';
import * as S from './SetLocationStyles';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import CurrentLocation from '@components/ProfileSetup/SetLocation/CurrentLocation/CurrentLocation';
import { useState } from 'react';

function SetLocation() {
  const [address, setAddress] = useState('');

  const handleAddressChange = (newAddress: string) => {
    setAddress(newAddress);
  };

  return (
    <>
      <CommonHeader>내 현재 위치</CommonHeader>
      <S.Wrapper>
        <KakaoMap
          width="100%"
          height="100%"
          onAddressChange={handleAddressChange}
        />
        <CurrentLocation address={address} />
      </S.Wrapper>
    </>
  );
}

export default SetLocation;
