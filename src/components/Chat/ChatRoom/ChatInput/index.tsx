// import { io } from "socket.io-client";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChatStorage } from '@/store/slices/ChatSlice';
import { size } from '@/styles/theme';
import styled from 'styled-components';
import { Input } from "@Pages/Articles/WriteComment/CreatePost/Progress3/Progresss3Styles"
import Chat_send_able from '@Assets/Icons/Chat/Chat_send_able.svg';
import Chat_send_disable from '@Assets/Icons/Chat/Chat_send_disable.svg';
import { chatStorageType } from '@/types/ChatTypes';

interface IChatInputProps {
  saleState: string;
  userId: string;
}

const ChatInput = ({ saleState, userId }: IChatInputProps) => {
  // const socket = io();
  const [sendMessage, setSendMessage] = useState<chatStorageType>({
    send: true,
    userId: userId,
    message: '',
    time : null,
  });
  const dispatch = useDispatch();

  //* 메세지 송신
  const handlesendMessageMessage = async (e: React.SyntheticEvent) => {
    if (!sendMessage.message) {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      dispatch(setChatStorage({...sendMessage }));
      setSendMessage({...sendMessage, message : '', time : null});
    }

    // todo : socket.emit (메세지 송신)
    // await socket.emit('message-sendMessage', { // 메세지 전송
    //   userId: userId,
    //   message: ChatRef.current.value,
    //   time : new Date(),
    // });
  }

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSendMessage({ ...sendMessage, message: e.target.value, time : new Date()});
  };

  return (
      <Wrapper>
        <InputContainer>
          <form onSubmit={handlesendMessageMessage}> 
              <CahtInput
                type='text'
                value={sendMessage.message}
                placeholder={saleState !== '판매완료' ? '메세지를 입력해주세요.' : ''}
                disabled={saleState === '판매완료' ? true : false}
                onChange={onInputHandler}
                />
              </form>
          </InputContainer>
        <SendMessageButton $active={sendMessage.message}>
          <img
          src={(saleState === '판매완료') || (!sendMessage.message) ? Chat_send_disable : Chat_send_able}
          onClick={handlesendMessageMessage}
        />
        </SendMessageButton>
      </Wrapper>
  );
};

export default ChatInput;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  max-width: ${size.mobile};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  bottom: 0; 
  padding: 0 12px 0 20px;
  border-top: 0.5px solid ${({ theme }) => theme.color.gray };
  background-color: ${({ theme }) => theme.color.white};
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-right: 5px;
`;

const CahtInput = styled(Input)`
  width: 100%;
  height: 36px;
`;

const SendMessageButton = styled.button<{$active : boolean}>`
  display: flex;
  border: none;
  background-color: transparent;
  cursor: ${({ $active }) => $active ? 'pointer' : 'not-allowed'};
`;

