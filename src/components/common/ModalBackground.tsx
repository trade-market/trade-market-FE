import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
`;

function ModalBackground() {
  return <Wrapper />;
}

export default ModalBackground;
