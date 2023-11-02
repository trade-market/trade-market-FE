import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
`;

const rotation = keyframes`
  0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid ${({ theme }) => theme.color.whiteGray};
  border-bottom-color: ${({ theme }) => theme.color.Mainblue};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

function Spinner() {
  return (
    <Container>
      <Loader />
    </Container>
  );
}

export default Spinner;
