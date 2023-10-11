// import { io } from "socket.io-client";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useModal from '@hooks/useModal';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import BottomSheet from '@components/common/BottomSheet';
import InfoCollapse from '@components/Chat/ChatRoom/InfoCollapse';
import ChatInput from '@components/Chat/ChatRoom/ChatInput';
import Chatting from '@components/Chat/ChatRoom/Chatting/Chatting';

const ChatRoom = () => {
  const [saleState, setSaleState] = useState<string>('판매중');
  const selectPlan = useSelector((state: RootState) => state.chat.planTime);
  const chatStorage = useSelector((state: RootState) => state.chat.chatStorage);
  const { isOpen, open, close } = useModal();
  const { id } = useParams<{ id: string }>();

  const handleChangeState = (e : React.MouseEvent<HTMLDivElement>) => {
    setSaleState(e.currentTarget.innerText);
    close();
  }

  useEffect(() => {
    if (selectPlan.ap) {
      setSaleState('예약중')
    };
    if ((selectPlan.date !== null) && (selectPlan.date < new Date())) {
      setSaleState('판매완료')
    }
  }, []);

  //todo : 추후 소켓 서버와 연결
  // const socket = io();
  // const socketConnect = socket.connect('http://localhost:8000', {
  //           path: '/socket.io', // 서버 path와 일치시켜준다
  //           //transports: ['websocket'] // polling 시도하지말고 바로 웹소켓으로 하려면 설정
  // });

  //todo 메세지 수신
  // useEffect(() => {
  //   socket.on('message-receive', (chatObj) => {
  //     const { send, userId, massege, time } = chatObj;
      
  //   })
  // }, [chatStorage]);
  
  return (
    <>
      <CommonHeader>
        <HeaderSection>
          <span className='title'>상대방 닉네임</span>
          <StateButton $saleState={saleState} onClick={open}>{saleState}</StateButton>
        </HeaderSection>
      </CommonHeader>
      <ChatWrapper>
        <InfoCollapse saleState={saleState} />
        <Chatting />
        <ChatInput saleState={saleState} userId={id} />
      </ChatWrapper>
      {isOpen && (
        <BottomSheet height="250px" onClick={close}>
          <StateOption onClick={handleChangeState}>판매중</StateOption>
          <StateOption onClick={handleChangeState}>예약중</StateOption>
          <StateOptionComplete onClick={handleChangeState}>판매완료</StateOptionComplete>
        </BottomSheet>
      )}
    </>
  );
};

export default ChatRoom;

const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .title {
    justify-content: center;
  }
`;

const StateButton = styled.button<{ $saleState: string; }>`
  border: ${({ theme, $saleState }) =>
  $saleState === '예약중' ? `1px solid ${theme.color.orange}` : `none`};
  background-color: ${({ theme, $saleState }) =>
  $saleState === '판매중' ? theme.color.orange : $saleState === '판매완료' ? theme.color.whiteGray : 'transparent'};
  color: ${({ theme, $saleState }) =>
    $saleState === '판매중' ? theme.color.bgColor : $saleState === '판매완료' ? theme.color.lightGray : theme.color.orange};
  padding: 4px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.xSmall};
`;

const StateOption = styled.div``;
const StateOptionComplete = styled(StateOption)`
  color : ${({ theme }) => theme.color.activeBlue};
`;

const ChatWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 60px;
  padding-bottom: 70px;
  background-color: yellow;
`;

