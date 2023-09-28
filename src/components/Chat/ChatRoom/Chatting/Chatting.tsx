import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import { format } from "date-fns";
import styled from 'styled-components';
import SpeechBubble from '@components/Chat/ChatRoom/Chatting/SpeechBubble';
import DateBar from './DateBar';

const Chatting = () => {
  const chatStorage = useSelector((state: RootState) => state.chat.chatStorage);

  return (
    <>
      {
        chatStorage.map((chat, i, arr) => {
          let ChatDate = arr[i].time.getMonth() + arr[i].time.getDate();

          return (
            <ChattingWrapper key={i}>
              <DateBar date={chat.time} />
              <SpeechBubble send={false} message={chat.message} time={chat.time} />
              <SpeechBubble send={chat.send} message={chat.message} time={chat.time} />
            </ChattingWrapper>
          )
        })
      }
    </>
  );
};

export default Chatting;

const ChattingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;