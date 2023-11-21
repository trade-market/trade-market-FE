import React from 'react';
import * as C from './CurrentLocationStyles';
import BigTitle from '@components/common/BigTitle';
import BlueButton from '@/components/common/Buttons/BlueButton';

interface ICurrentLocationProps {
  addressInfo: string;
  handleCompleteBtn: () => void;
}

function CurrentLocation({
  addressInfo,
  handleCompleteBtn,
}: ICurrentLocationProps) {
  return (
    <C.Wrapper>
      <C.TitleContainer>
        <C.SmallTitle>현재 동네</C.SmallTitle>
        <BigTitle>{addressInfo}</BigTitle>
      </C.TitleContainer>
      <BlueButton disabled={false} onClick={handleCompleteBtn} maxWidth="100%">
        이 동네로 설정
      </BlueButton>
    </C.Wrapper>
  );
}

export default CurrentLocation;
