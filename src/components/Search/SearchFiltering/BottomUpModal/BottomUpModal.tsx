import { useState } from "react";
import styled from "styled-components";
import { size } from '@/styles/theme';
import ModalButtons from "./ModalButtons";
import { Background } from '@components/common/BottomSheet/index';

interface IBottomUpModalProps {
  close: () => void;
  children?: React.ReactNode;
}

const BottomUpModal = ({ close, children }: IBottomUpModalProps) => {
  const [selectOption, setSelectOption] = useState('');

  return (
    <>
      <Background onClick={close}/>
      <Container>
        <ModalButtons CloseButtonClickHandler={close} AcceptButtonClickHandler={close} />
      </Container>
    </>
  );
};

export default BottomUpModal;

const Container = styled.div<{ $height?: string;}>`
  display: flex;
  flex-direction: column;
  max-width: ${size.mobile};
  width: 100%;
  z-index: 150;
  position: fixed;
  bottom: 0;
  height: 300px;
  animation: bottomUp 0.3s ease-out;
  background-color: ${({ theme }) => theme.color.bgColor};
  border-radius: 8px 8px 0 0;
  overflow-y: scroll;
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
  background-color: yellow;
`;
