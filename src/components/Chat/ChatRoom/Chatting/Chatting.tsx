import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import styled from 'styled-components';
import SpeechBubble from '@components/Chat/ChatRoom/Chatting/SpeechBubble';
import DateBar from './DateBar';

const Chatting = () => {
  const chatStorage = useSelector((state: RootState) => state.chat.chatStorage);
  const CheckDate = ((time: any) => time.getMonth() + time.getDate())

  return (
    <>
      {
        chatStorage.map((chat, i, arr) => {
          let standardTime = CheckDate(arr[0].time);
          let flag = false;
          if (i === 0 || standardTime !== CheckDate(chat.time)) flag = true;
          else standardTime = CheckDate(chat.time);
          return (
            <ChattingWrapper key={i}>
              {flag ? <DateBar date={chat.time} /> : <></>}
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