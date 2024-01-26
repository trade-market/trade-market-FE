import React from 'react';
import styled from 'styled-components';
import character_icon from '@Assets/Character_Icons/Character_Congratulations_160_160 ver.svg';

const SignUpSuccessModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ebf0fc;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 51px;
`;

const CharacterIcon = styled.img`
  width: 160px;
  height: 160px;
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: 500;
`;

interface ISginUpSuccessModalProps {
  isOpen: boolean;
}

function SignUpSuccessModal({ isOpen }: ISginUpSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <SignUpSuccessModalWrapper>
      <ContentWrapper>
        <CharacterIcon src={character_icon} alt="character" />
        <Text>가입이 완료되었습니다!</Text>
      </ContentWrapper>
    </SignUpSuccessModalWrapper>
  );
}

export default SignUpSuccessModal;
