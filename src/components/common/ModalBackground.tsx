import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 997;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
`;

interface IModalBackgroundProps {
  onClick?: () => void;
}

function ModalBackground({ onClick }: IModalBackgroundProps) {
  return <Wrapper onClick={onClick} />;
}

export default ModalBackground;
