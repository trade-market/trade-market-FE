import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setChatStorage } from '@/store/slices/ChatSlice';
import { RootState } from '@store/types';
import { format } from "date-fns";
import styled from 'styled-components';
import SpeechBubble from '@components/Chat/ChatRoom/Chatting/SpeechBubble';
import DateBar from './DateBar';

const Chatting = () => {
  const chatStorage = useSelector((state: RootState) => state.chat.chatStorage);
  const { id } = useParams<{ id: string }>();

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