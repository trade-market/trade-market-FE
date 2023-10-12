import styled from 'styled-components';
import { size } from '@/styles/theme';
import ActionButton from '@/components/common/Buttons/ActionButton';
import BlueButton from '@components/common/Buttons/BlueButton';

interface IModalButtonsProps {
  CloseButtonClickHandler: () => void;
  AcceptButtonClickHandler: () => void;
}

const ModalButtons = ({ CloseButtonClickHandler, AcceptButtonClickHandler } : IModalButtonsProps) => {
  return (
    <Container>
      <ActionButton
        onClick={CloseButtonClickHandler}
        $backgroundColor={'whiteLightGray'}
        color={'black'}
        $width={'40%'}
        $customHeight={true}
        >닫기</ActionButton>
      <BlueButton
        maxWidth={'100%'}
        disabled={false}
        onClick={AcceptButtonClickHandler}
        customHeight={true}
        >적용하기</BlueButton>
    </Container>
  );
};

export default ModalButtons;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${size.mobile};
  padding: 20px 20px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.bgColor};
`;