import { useState } from 'react';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import ChatListItem from '@components/Chat/ChatList/ChatListItem';
import Check_icon from '@Assets/Icons/Chat/Check.svg';
import UserIcon from '@Assets/Icons/Chat/UserIcon.svg';
import useModal from '@hooks/useModal';
import ConfirmModal from '@components/common/confirmModal';

const ChatList = () => {
  const [deleteModeOn, setDeleteModeOn] = useState<boolean>(false);
  const [checkItems, setCheckItems] = useState<Set<unknown>>(new Set());
  const {
    isOpen: isDeleteModalOpen,
    open: deleteModalOpen,
    close: deleteModalClose,
  } = useModal();

  const tempData = [
    { nickname: '닉네임', time: '오전 10:01', text: '시간 언제가 괜찮으신가요? 전 이번주...', userImage: UserIcon },
    { nickname: '세모난 수박', time: '오후 4:29', text: '안녕하세요~', userImage: UserIcon },
    { nickname: '네모난 감자', time: '오전 7:31', text: '아직 판매 하시나요?', userImage: UserIcon },
  ];

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
    deleteModalClose();
  };

  return (
    <>
      <CommonHeader>
        <HeaderSection>
          <span className='title'>채팅</span>
          {!deleteModeOn ?
            <img className='check' src={Check_icon} onClick={() => { setDeleteModeOn(prev => !prev); checkItems.clear(); }} />
            : <DeleteButton $active={checkItems.size > 0} onClick={() => checkItems.size > 0 ? deleteHandler() : setDeleteModeOn(prev => !prev)}>삭제</DeleteButton>}
        </HeaderSection>
      </CommonHeader>
      <Wrapper>
        {tempData.map((chat, i)=> (
          <ChatListItem
            key={i}
            id={`user${i.toString()}`}
            nickName={chat.nickname}
            time={chat.time}
            text={chat.text}
            userImg={chat.userImage}
            deleteMode={deleteModeOn}
            checkHandler={checkHandler}
            />
      ))}
      </Wrapper>
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="채팅 삭제"
        content={`${checkItems.size}개의 채팅을 삭제하시겠습니까?`}
        confirmedContent="삭제되었습니다."
        onFinalOkClick={handleConfirm}
        closeAction={deleteModalClose}
        confirmType={'삭제'}
      />
    </>
  );
};

export default ChatList;


export const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .check {
    padding-right: 5px;
    cursor: pointer;
  }
`;

const DeleteButton = styled.button<{$active : boolean}>`
  border: none;
  margin-left: -13px;
  background-color: transparent;
  color : ${({ theme, $active }) => $active ? '#FF5B22' : theme.color.gray}; 
  font-size: ${({ theme }) => theme.font.size.base};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  margin-top: 60px;
`;