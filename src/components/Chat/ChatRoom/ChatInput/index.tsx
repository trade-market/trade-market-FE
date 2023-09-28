import { useState } from 'react';
import { size } from '@/styles/theme';
import styled from 'styled-components';
import { Input } from "@Pages/Articles/WriteComment/CreatePost/Progress3/Progresss3Styles"
import Chat_send_able from '@Assets/Icons/Chat/Chat_send_able.svg';
import Chat_send_disable from '@Assets/Icons/Chat/Chat_send_disable.svg';

interface IChatInputProps {
  saleState: string;
  ChatRef: React.MutableRefObject<any>;
}

const ChatInput = ({ saleState, ChatRef }: IChatInputProps) => {
  const [send, setSend] = useState('');

  const handleSubmit = () => {
    console.log(send);
  }

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSend(e.target.value);
  };

  return (
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <CahtInput
            type='text'
            ref={ChatRef}
            value={send}
            placeholder='메세지를 입력해주세요.'
            disabled={saleState === '판매완료' ? true : false}
            onChange={onInputHandler}
        />
        <SendButton $active={send.length > 0}>
          <img src={send.length > 0 ? Chat_send_able : Chat_send_disable} />
        </SendButton>
        </Wrapper>
      </form>
  );
};

export default ChatInput;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  /* position: absolute; */
  max-width: ${size.mobile};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
  padding: 0 12px 0 20px;
  border-top: 0.5px solid ${({ theme }) => theme.color.gray };
`;

const CahtInput = styled(Input)`
  width: 100%;
  height: 36px;
  margin-right: 3px;
`;

const SendButton = styled.button<{$active : boolean}>`
  display: flex;
  border: none;
  background-color: transparent;
  cursor: ${({ $active }) => $active ? 'pointer' : 'not-allowed'};
`;

