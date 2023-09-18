import styled from 'styled-components';
import BottomSheet from '@components/common/BottomSheet';

const LogoutText = styled.div``;

const WithDrawText = styled.div`
  color: red;
`;

interface IOptionModalProps {
  isOpen: boolean;
  close: () => void;
  onLogoutClick: () => void;
}

function OptionModal({ isOpen, close, onLogoutClick }: IOptionModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <BottomSheet onClick={close}>
        <LogoutText onClick={onLogoutClick}>로그아웃</LogoutText>
        <WithDrawText>탈퇴하기</WithDrawText>
      </BottomSheet>
    </>
  );
}

export default OptionModal;
