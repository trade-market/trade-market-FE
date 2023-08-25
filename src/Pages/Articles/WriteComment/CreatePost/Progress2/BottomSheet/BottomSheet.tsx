import styled from 'styled-components';
import { size } from '@/styles/theme';

interface IBottomSheetProps {
  handleGetImage: (e: React.ChangeEvent) => void
  closeModal: () => void;
}

function BottomSheet({ handleGetImage, closeModal}: IBottomSheetProps) {
  return (
    <>
      <Background />
      <Container>
        <div>카메라</div>
          <label>
            사진 앨범
            <input 
            type='file'
            id='file'
            accept='image/*'
            onChange={handleGetImage}
            />
        </label>
        <div onClick={closeModal}>닫기</div>
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
  z-index: 10;
  backdrop-filter : blur(3px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(150, 150, 150, 0.4);  
  transition: transform 650ms ease-out;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  z-index: 12;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  overflow-y: scroll;
  height: 190px;
  animation: bottomUp 0.3s ease-out;

  @keyframes bottomUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  :nth-child(1), :nth-child(2), :nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.bgColor};
    cursor: pointer;
    padding: 20px 0;
    margin: 0 20px;
    box-shadow:1px 1px 3px 0px ${({ theme }) => theme.color.gray};
    font-size:  ${({ theme }) => theme.font.size.base};
    font-weight: 500;
    opacity: 0.9;
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