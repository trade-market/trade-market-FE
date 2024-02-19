import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import styled from 'styled-components';
import SpeechBubble from '@components/Chat/Chatting-Component/SpeechBubble';
import DateBar from '../DateBar';

const Chatting = () => {
  const chatStorage = useSelector((state: RootState) => state.chat.chatStorage);
  const CheckDate = (time: any) => time.getMonth() + time.getDate();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, [chatStorage]);

  return (
    <>
      {chatStorage.map((chat, i, arr) => {
        let standardTime = CheckDate(arr[0].time);
        let isNewChatDate = false;
        if (i === 0 || standardTime !== CheckDate(chat.time))
          isNewChatDate = true;
        else standardTime = CheckDate(chat.time);
        return (
          <ChattingWrapper key={i} ref={scrollRef}>
            {isNewChatDate ? <DateBar date={chat.time} /> : null}
            <SpeechBubble
              send={chat.send}
              message={chat.message}
              time={chat.time}
            />
          </ChattingWrapper>
        );
      })}
    </>
  );
};

export default Chatting;

const ChattingWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 7px 0;
`;
