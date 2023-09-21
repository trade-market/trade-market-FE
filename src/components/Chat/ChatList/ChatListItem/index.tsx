import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CheckBox from '../Checkbox';

interface IChatListItemProps {
  id: string;
  userImg?: string;
  nickName: string;
  time: string;
  text: string;
  deleteMode: boolean;
  checkHandler: ((id: string, isChecked: boolean) => void);
}

const ChatListItem = ({ id, userImg, nickName, time, text, deleteMode, checkHandler }: IChatListItemProps) => {
  const navigate = useNavigate();
  
  const handlerClick = () => {
    if (!deleteMode) navigate(id);
  }

  return (
    <Container $deleteMode={deleteMode} onClick={handlerClick}>
      <div className='image-section'>
        <img src={userImg} />
      </div>
      <ContentBox>
        <div>
          <span className='nickname'>{nickName}</span>
          <span className='time'>{time}</span>
        </div>
        <div className='text'>{text}</div>
      </ContentBox>
      <div className='checkbox-section'>
        <CheckBox
          id={id}
          checkHandler={checkHandler}
        />
        <label className='check' />
      </div>
    </Container>
  );
};

export default ChatListItem;

const Container = styled.div<{ $deleteMode : boolean }>`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  align-items: center;
  border-bottom: 0.5px solid ${({ theme }) => theme.color.whiteGray}; 
  cursor: pointer;

  .image-section {
    margin: 3px 5px 0 5px;
  }
  .checkbox-section {
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
  } 
`;

const ContentBox = styled.div`
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