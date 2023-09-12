import { useState } from 'react';
import styled from 'styled-components';
import BottomSheet from '@components/common/BottomSheet';

const LogoutText = styled.div``;

const WithDrawText = styled.div`
  color: red;
`;

interface IOptionModalProps {
  close: () => void;
}
function OptionModal({ close }: IOptionModalProps) {
  return (
    <BottomSheet onClick={close}>
      <LogoutText>로그아웃</LogoutText>
      <WithDrawText>탈퇴하기</WithDrawText>
    </BottomSheet>
  );
}

export default OptionModal;
