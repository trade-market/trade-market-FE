import styled from 'styled-components';
import { size } from '@/styles/theme';

interface IBottomSheetProps {
  children?: React.ReactNode;
  onClick?: () => void;
  height?: string;
}

function BottomSheet({
  children,
  onClick,
  height = '190px',
}: IBottomSheetProps) {
  return (
    <>
      <Background onClick={onClick} />
      <Container $height={height}>
        {children}
        <div onClick={onClick}>닫기</div>
      </Container>
    </>
  );
}

export default BottomSheet;

const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 99;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(150, 150, 150, 0.4);
  transition: transform 650ms ease-out;
`;

const Container = styled.div<{ $height?: string }>`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  z-index: 100;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  overflow-y: scroll;
  height: ${({ $height }) => $height};
  animation: bottomUp 0.3s ease-out;

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

  :nth-child(1),
  :nth-child(2),
  :nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.bgColor};
    cursor: pointer;
    padding: 20px 0;
    margin: 0 20px;
    box-shadow: 1px 1px 3px 0px ${({ theme }) => theme.color.gray};
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: 500;
    cursor: pointer;
  }

  :nth-child(1) {
    border-radius: 8px 8px 0 0;
  }

  :nth-child(2) {
    border-radius: 0 0 8px 8px;
  }

  :nth-child(3) {
    margin-top: 10px;
    border-radius: 8px;
  }

  #file {
    display: none;
  }
`;
