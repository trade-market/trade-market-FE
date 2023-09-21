import styled from 'styled-components';
import SpeechBubble from '@components/Chat/ChatRoom/Chatting/SpeechBubble';
import DateBar from './DateBar';


const Chatting = () => {
  return (
    <>
      <DateBar date={new Date()} />
      <ChattingWrapper>
        <SpeechBubble send={false} message={'안녕하세요'} />
        <SpeechBubble send={true} message={'안녕하세요'} />
        <SpeechBubble send={false} message={'안녕하세요'} />
          <SpeechBubble send={true} message={'안녕하세요'} />
      </ChattingWrapper>
    </>
  );
};

export default Chatting;

const ChattingWrapper = styled.div`
  width: 100%;
  padding: 0px 20px;
`;