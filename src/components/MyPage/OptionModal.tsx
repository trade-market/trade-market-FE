import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import BottomSheet from '@components/common/BottomSheet';
import TokenService from '@/service/TokenService';
import { logoutUser } from '@store/slices/userSlice';

const LogoutText = styled.div``;

const WithDrawText = styled.div`
  color: red;
`;

interface IOptionModalProps {
  close: () => void;
}

function OptionModal({ close }: IOptionModalProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    TokenService.clearTokens();
    navigate('/?action=logout');
  };

  return (
    <BottomSheet onClick={close}>
      <LogoutText onClick={handleLogout}>로그아웃</LogoutText>
      <WithDrawText>탈퇴하기</WithDrawText>
    </BottomSheet>
  );
}

export default OptionModal;
