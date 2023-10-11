import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import styled from 'styled-components';
import SpeechBubble from '@components/Chat/ChatRoom/Chatting/SpeechBubble';
import DateBar from './DateBar';

const Chatting = () => {
  const chatStorage = useSelector((state: RootState) => state.chat.chatStorage);
  const CheckDate = ((time: any) => time.getMonth() + time.getDate());
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      console.log('scrollRef.current.scrollTop', scrollRef.current.scrollTop)
      console.log('scrollRef.current.scrollHeight', scrollRef.current.scrollHeight)
    }
  };

  useEffect(() => {
    scrollToBottom();
    // scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatStorage]);


  return (
    <Wrapper ref={scrollRef}>
      {
        chatStorage.map((chat, i, arr) => {
          let standardTime = CheckDate(arr[0].time);
          let isNewChatDate = false;
          if (i === 0 || standardTime !== CheckDate(chat.time)) isNewChatDate = true;
          else standardTime = CheckDate(chat.time);
          return (
            <ChattingWrapper key={i}>
              {isNewChatDate ? <DateBar date={chat.time} /> : null}
              <SpeechBubble send={chat.send} message={chat.message} time={chat.time} />
            </ChattingWrapper>
          )
        })
      }
    </Wrapper>
  );
};

export default Chatting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: gray;
  overflow-y: auto;
`;

const ChattingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;