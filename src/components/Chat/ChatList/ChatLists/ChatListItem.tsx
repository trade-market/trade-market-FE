import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CheckBox from '../Checkbox';
import UnReadChatList from './UnreadChatList';

interface IChatListItemProps {
  id: string;
  userImg?: string;
  nickName: string;
  time: string;
  text: string;
  deleteMode: boolean;
  checkHandler: ((id: string, isChecked: boolean) => void);
  checkItems: Set<unknown>;
}

const ChatListItem = ({ id, userImg, nickName, time, text, deleteMode, checkHandler, checkItems }: IChatListItemProps) => {
  const navigate = useNavigate();
  
  const handlerClick = () => {
    if (!deleteMode) navigate(`${id}`, {
      state: {
        nickName: nickName
    }});
  }

  return (
    <Wrapper onClick={handlerClick}>
      <ChatListWrapper>
        <ImageContainer>
          <img src={userImg} />
        </ImageContainer>
        <ContentContainer>
          <div>
            <span className='nickname'>{nickName}</span>
            <span className='time'>{time}</span>
          </div>
          <div className='text'>{text}</div>
        </ContentContainer>
        <CheckboxContainer $deleteMode={deleteMode} >
          <CheckBox
            id={id}
            checkHandler={checkHandler}
            checkItems={checkItems}
          />
        </CheckboxContainer>
      </ChatListWrapper>
      <UnReadChatList
        unreadNumber={1}
        deleteMode={deleteMode}
      />
    </Wrapper>
  );
};

export default ChatListItem;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  align-items: center;
  border-bottom: 0.5px solid ${({ theme }) => theme.color.whiteGray}; 
  cursor: pointer;
`;

const ChatListWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ImageContainer = styled.div`
  margin: 3px 5px 0 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 10px;
  .nickname {
    font-weight: 600;
    margin-right: 5px;
  }
  .time {
    font-weight: 500;
    color : ${({ theme }) => theme.color.gray};
    font-size: ${({ theme }) => theme.font.size.xSmall};
  }
  .text {
    padding-top: 7px;
    font: 15px;
  }
`;

const CheckboxContainer = styled.div<{ $deleteMode : boolean }>`
  > input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 2px;
  cursor: pointer;
  height: 12px;
  width: 12px;
  background-color: ${({ theme }) => theme.color.gray}; 
  display: ${({ $deleteMode }) => $deleteMode ? 'block' : 'none'};
    &:checked {
      background-color: ${({ theme }) => theme.color.activeBlue}; 
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5714 4L6.85714 11.1429L4 9' stroke='%23FDFDFD' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-position: 50%;
    }
  }
`;