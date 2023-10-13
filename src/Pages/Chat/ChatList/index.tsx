import { useState } from 'react';
// import socketio from 'socket.io-client';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import ChatListHeader from '@components/Chat/ChatList/ChatListHeader';
import ChatLists from '@components/Chat/ChatList/ChatLists';
import Character_circle from '@Assets/Character_Icons/Character_circle.svg';
import useModal from '@hooks/useModal';
import ConfirmModal from '@components/common/ConfirmModal';

  const tempData = [
    { nickname: '동그란 당근', time: '오전 10:01', text: '시간 언제가 괜찮으신가요? 전 이번주...', userImage: Character_circle },
    { nickname: '세모난 수박', time: '오후 4:29', text: '안녕하세요~', userImage: Character_circle },
    { nickname: '네모난 감자', time: '오전 7:31', text: '아직 판매 하시나요?', userImage: Character_circle },
  ];

const ChatList = () => {
  const [deleteModeOn, setDeleteModeOn] = useState<boolean>(false);
  const [checkItems, setCheckItems] = useState<Set<unknown>>(new Set());
  // const socket = socketio(process.env.REACT_APP_SOCKET_URL);
  // const socket = socketio.connect(process.env.REACT_APP_SOCKET_URL);
  const {
    isOpen: isDeleteModalOpen,
    open: deleteModalOpen,
    close: deleteModalClose,
  } = useModal();

  const checkHandler = (id: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckItems((prev) => new Set([...prev, id]));
    }
    else if (!isChecked && checkItems.has(id)) {
      setCheckItems((prev) => {
        const newCheckItems = new Set(prev);
        newCheckItems.delete(id);
        return newCheckItems;
      });
    } 
  }

  const deleteHandler = () => {
    deleteModalOpen();
  }

  const handleConfirm = () => {
    //Todo : 삭제 petch api
    console.log('삭제');
    checkItems.clear();
    deleteModalClose();
    setDeleteModeOn(false);
  };

  return (
    <Wrapper>
      <CommonHeader>
        <span className='title'>채팅</span>
        <ChatListHeader
          deleteModeOn={deleteModeOn}
          setDeleteModeOn={setDeleteModeOn}
          checkItems={checkItems}
          deleteHandler={deleteHandler}
          />
      </CommonHeader>
      <ChatWrapper>
        <ChatLists
        ChatListData={tempData}
        deleteModeOn={deleteModeOn}
        checkHandler={checkHandler}
        checkItems={checkItems}
          />
      </ChatWrapper>
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="채팅 삭제"
        content={`${checkItems.size}개의 채팅을 삭제하시겠습니까?`}
        confirmedContent="삭제되었습니다."
        onFinalOkClick={handleConfirm}
        closeAction={deleteModalClose}
        confirmType={'삭제'}
      />
    </Wrapper>
  );
};

export default ChatList;

const Wrapper = styled.div`
  display: flex;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  margin-top: 60px;
`;

