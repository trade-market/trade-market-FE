import styled from 'styled-components';
import BigTitle from '@components/common/BigTitle';
import ModalBackground from '@components/common/ModalBackground';
import { size } from '@styles/theme';
import { OfferPostTypes } from '@/types/OfferTypes';
import ChatToOfferedUserList from './ChatToOfferedUserList';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  max-width: ${size.mobile};
  width: 100%;
  z-index: 999;
  padding: 24px 0;
  border-radius: 16px 16px 0px 0px;
  background-color: ${({ theme }) => theme.color.bgColor};
  z-index: 999;
  animation: bottomUp 0.25s ease-in-out;
  @keyframes bottomUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  h2 {
    margin-left: 21px;
  }
`;

interface IChatToOfferedUserProps {
  offers: OfferPostTypes[];
}

function ChatToOfferedUser({ offers }: IChatToOfferedUserProps) {
  return (
    <>
      <ModalBackground />
      <Container>
        <BigTitle>채팅하기</BigTitle>
        <ChatToOfferedUserList offers={offers} />
      </Container>
    </>
  );
}

export default ChatToOfferedUser;
