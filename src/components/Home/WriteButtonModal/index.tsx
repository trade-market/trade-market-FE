import React from 'react';
import styled from 'styled-components';
import { size } from '@styles/theme';

interface IWriteButtonModaltProps {
  children?: React.ReactNode;
  onClick?: () => void;
  height?: string;
}

function WriteButtonModal({ children }: IWriteButtonModaltProps) {
  return (
    <>
      <Background />
      <Container>{children}</Container>
    </>
  );
}

export default WriteButtonModal;

const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: ${size.mobile};
  height: 100%;
  z-index: 90;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(150, 150, 150, 0.4);
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: ${size.mobile};
  z-index: 100;
  flex-direction: column;
  position: fixed;
  padding-right: 32px;
  bottom: 160px;
  overflow-y: hidden;
  animation: bottomUp 0.3s ease-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes bottomUp {
    0% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  .post-menu {
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 165px;
    background-color: ${({ theme }) => theme.color.bgColor};
    cursor: pointer;
    padding: 2px 20px 2px 10px;
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: 500;
    cursor: pointer;
    border-top: 0.4px solid ${({ theme }) => theme.color.gray};

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50px;
    }
  }

  :nth-child(1) {
    border-radius: 8px 8px 0 0;
  }

  :nth-child(2) {
    border-radius: 0 0 8px 8px;
  }
`;
