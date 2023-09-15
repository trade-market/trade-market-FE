import styled from 'styled-components';

interface IChatListItemProps {
  userImg?: string;
  nickName: string;
  time: string;
  text: string;
  deleteMode: boolean;
}

const ChatListItem = ({userImg, nickName, time, text, deleteMode}: IChatListItemProps) => {
  return (
    <Container $deleteMode={deleteMode}>
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
        <input
          type='checkbox'
        />
      </div>
    </Container>
  );
};

export default ChatListItem;

const Container = styled.div<{ $deleteMode : boolean }>`
  display: flex;
  width: 100%;
  padding: 7px 0;
  align-items: center;
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