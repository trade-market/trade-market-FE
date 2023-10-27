import styled from "styled-components";
import { size } from '@/styles/theme';
import ModalButtons from "./ModalButtons";
import { Background } from '@components/common/BottomSheet/index';

interface IBottomUpModalProps {
  filterNumber: number;
  titleText: string;
  close: () => void;
  children: React.ReactNode;
  AddQueryStringHandler: () => void;
}

const BottomUpModal = ({ titleText, close, AddQueryStringHandler, children, filterNumber }: IBottomUpModalProps) => {
  return (
    <>
      <Background onClick={close}/>
        <Wapper $filterNumber={filterNumber}>
          <Title>{titleText}</Title>
          <Container>
            {children}  
          </Container>
          <ModalButtons CloseButtonClickHandler={close} AcceptButtonClickHandler={AddQueryStringHandler} />
        </Wapper>
    </>
  );
};

export default BottomUpModal;

const Wapper = styled.div<{ $height?: string; $filterNumber: number; }>`
  display: flex;
  flex-direction: column;
  max-width: ${size.mobile};
  width: 100%;
  z-index: 150;
  position: fixed;
  bottom: 0;
  height: ${({ $filterNumber }) => $filterNumber !== 2 ? '270px' : '450px'}; 
  animation: bottomUp 0.3s ease-out;
  background-color: ${({ theme }) => theme.color.bgColor};
  border-radius: ${({ $filterNumber }) => $filterNumber !== 2 ? '16px 16px 0 0;' : '0'}; 
  
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
  padding : 0 25px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.div`
  padding : 30px 30px 35px 30px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.large};
`;
