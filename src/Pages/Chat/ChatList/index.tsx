import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import ChatListItem from '@components/Chat/ChatListItem';
import Check_icon from '@Assets/Icons/Chat/Check.svg';
import UserIcon from '@Assets/Icons/Chat/UserIcon.svg';

const ChatList = () => {
  const [deleteModeOn, setDeleteModeOn] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const renderUserList = (
    nickName: string,
    time: string,
    text: string,
    deleteMode: boolean,
    userImg?: string,
  ) => (
    <ChatListItem
      userImg={userImg}
      nickName={nickName}
      time={time}
      text={text}
      deleteMode={deleteModeOn}
    />
  );
  
  return (
    <>
      <CommonHeader hideGobackButton={true}>
        <HeaderSection>
          <span className='title'>채팅</span>
          {!deleteModeOn ?
            <img className='check' src={Check_icon} onClick={() => setDeleteModeOn(prev => !prev)} />
            : <button className='deleteBtn' onClick={() => setDeleteModeOn(prev => !prev)}>삭제</button>}
        </HeaderSection>
      </CommonHeader>

      <Wrapper>
      {renderUserList('닉네임', '오전 10:01', '시간 언제가 괜찮으신가요? 전 이번주...', deleteModeOn, UserIcon)}
      </Wrapper>
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
  .deleteBtn {
    border: none;
    margin-left: -13px;
    background-color: transparent;
    color : ${({ theme }) => theme.color.gray}; 
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  margin-top: 60px;
  padding: 0 20px;
`;