import { useState } from "react";
import styled from "styled-components";
import { size } from '@/styles/theme';
import ModalButtons from "./ModalButtons";
import { Background } from '@components/common/BottomSheet/index';

interface IBottomUpModalProps {
  titleText?: string;
  close: () => void;
  children?: React.ReactNode;
}

const BottomUpModal = ({ titleText, close, children }: IBottomUpModalProps) => {
  const [selectOption, setSelectOption] = useState('');

  return (
    <>
      <Background onClick={close}/>
        <Wapper>
          <Container>
            <Title>{titleText}</Title>
            {children}  
          </Container>
          <ModalButtons CloseButtonClickHandler={close} AcceptButtonClickHandler={close} />
        </Wapper>
    </>
  );
};

export default BottomUpModal;

const Wapper = styled.div<{ $height?: string;}>`
  display: flex;
  flex-direction: column;
  max-width: ${size.mobile};
  width: 100%;
  z-index: 150;
  position: fixed;
  bottom: 0;
  height: 270px;
  animation: bottomUp 0.3s ease-out;
  background-color: ${({ theme }) => theme.color.bgColor};
  border-radius: 16px 16px 0 0;
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding : 30px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.large};
  padding-bottom : 35px;
`;
