import styled from 'styled-components';
import ChatTime from '../ChatTime/ChatTime';

interface ISpeechBubbleProps {
  message: string;
  send: boolean;
  time: Date;
}

const SpeechBubble = ({ message, send, time } : ISpeechBubbleProps) => {
  return (
    <Container $send={send}>
      <ChatMessage $send={send}>
        <ChatTime send={send} time={time} />
        <ChatBubble $send={send}>{message}</ChatBubble>
      </ChatMessage>
    </Container>
  );
};

export default SpeechBubble;

const Container = styled.div<{ $send: boolean; }>`
  display: flex;
  justify-content: ${({ $send }) => $send ? 'flex-end' : 'flex-start'};
  position: relative;
  width: 100%;
  padding: 25px 20px 0 20px;
`; 

const ChatMessage = styled.div<{ $send: boolean; }>`
  display: flex;
  flex-direction: ${({ $send }) => $send ? 'row' : 'row-reverse'};
`;

const ChatBubble = styled.div<{ $send: boolean; }>`
  display: flex;
  position: absolute;
  min-height: 83px;
  min-width: 204px;
  padding: 12px 15px;
  white-space: pre-wrap;
  word-break: break-all;
  border-radius: 5px;
  position: relative;
  font-size: ${({ theme }) => theme.font.size.small};
  background-color: ${({ theme }) => theme.color.lightBlue};
  color : ${({ theme }) => theme.color.lightGray};

  &::before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 4px solid ${({ theme,  $send }) => $send ? theme.color.lightBlue : 'transparent' };
    border-right: 4px solid ${({ theme,  $send }) => $send ? 'transparent' : theme.color.lightBlue };
    border-top: 4px solid ${({ theme, $send }) =>  $send ? theme.color.lightBlue : theme.color.lightBlue };
    border-bottom: 4px solid transparent;
    border-radius: 1px;
    top: -1px;
    right:${({ $send }) =>  $send ? '-6px' : null };
    left:${({ $send }) =>  $send ? null : '-6px' };
    transform: ${({ $send }) => $send ? 'rotate(-15deg)' : 'rotate(15deg)' };
  }
`;