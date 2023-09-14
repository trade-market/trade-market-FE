import styled from 'styled-components';
import mannerIcon from '@Assets/Icons/MyPage/매너.svg';
import badMannerIcon from '@Assets/Icons/MyPage/비매너.svg';

const Container = styled.div`
  display: flex;
  align-items: center;

  .icon {
    margin-right: 3px;
  }

  .count {
    width: 28px;
    color: ${({ theme }) => theme.color.Mainblue};
    font-weight: 500;
  }

  .bad {
    color: ${({ theme }) => theme.color.orange};
  }
`;

const Message = styled.div`
  padding: 15px 14px;
  border-radius: 0px 8px 8px 8px;
  background-color: #f2f2f2;
`;

interface IMannerTypeItemProps {
  count: number;
  message: string;
  isBadManner: boolean;
}

function MannerTypeItem({ count, message, isBadManner }: IMannerTypeItemProps) {
  return (
    <Container>
      <img
        className="icon"
        src={isBadManner ? badMannerIcon : mannerIcon}
        alt="manner-icon"
      />
      <span className={`count ${isBadManner && 'bad'}`}>{count}</span>
      <Message>{message}</Message>
    </Container>
  );
}

export default MannerTypeItem;
