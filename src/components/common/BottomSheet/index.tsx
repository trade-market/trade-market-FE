import styled from 'styled-components';
import { size } from '@/styles/theme';

interface IBottomSheetProps {
  children: React.ReactNode;
  onClick: () => void;
  height?: string;
  optionP?: string;
}

function BottomSheet({
  children,
  onClick,
  height = '190px',
}: IBottomSheetProps) {
  return (
    <>
      <Background onClick={onClick}/>
      <Container $height={height}>
        {children}
        <div className="close" onClick={onClick}>
          닫기
        </div>
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
  z-index: 140;
  background: var(--bg-blur, rgba(0, 0, 0, 0.2));
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 650ms ease-out;
`;

const Container = styled.div<{ $height?: string;}>`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  z-index: 150;
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

  * {
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

  :nth-last-child(2) {
    border-radius: 0 0 8px 8px;
  }

  .close {
    margin-top: 10px;
    border-radius: 8px;
  }

  /* input 사진 앨범 시 input display none */
  #file {
    display: none;
  }

  /* 단일 메뉴 시 */
  .single {
    border-radius: 8px;
  }
`;
