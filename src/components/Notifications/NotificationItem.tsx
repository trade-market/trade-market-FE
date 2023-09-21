import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/types';
import { checkItem, uncheckItem } from '@store/slices/CheckboxSlice';
import useTimeDiff from '@hooks/useTimeDiff';
import { NotificationType } from './NotificationList';
import Checkbox from './Checkbox';

const Container = styled.div<{ $read: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 21px;
  background-color: ${({ $read }) => !$read && '#EBF0FC'};

  img {
    width: 52px;
    height: 52px;
    border-radius: 8px;
    object-fit: cover;
  }

  .activity-emoji {
    width: 14px;
    font-weight: 500;
    margin-bottom: 32px;
  }

  .date {
    min-width: 40px;
    height: 100%;
    text-align: center;
    font-size: 10px;
    font-weight: 500;
    line-height: 150%;
    color: ${({ theme }) => theme.color.gray};
    align-self: flex-start;
  }
`;

const MessageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .category {
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.lightGray};
  }

  .text {
    font-size: 15px;
    white-space: normal;
    line-height: 110%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

function NotificationItem({
  id,
  category,
  image,
  message,
  createdAt,
  read,
}: NotificationType) {
  const timeDiff = useTimeDiff(createdAt);
  const dispatch = useDispatch();
  const { checkboxVisible, checkedItems } = useSelector(
    (state: RootState) => state.checkbox
  );
  const isChecked = checkedItems.includes(id);

  const handleCheckboxChange = () => {
    if (isChecked) {
      dispatch(uncheckItem(id));
    } else {
      dispatch(checkItem(id));
    }
  };

  return (
    <Container $read={read}>
      {checkboxVisible && (
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
      )}
      {image ? (
        <img src={image} alt="대표 이미지" />
      ) : (
        <span className="activity-emoji" role="img" aria-label="pencil">
          🖋️
        </span>
      )}
      <MessageSection>
        <div className="category">{category}</div>
        <p className="text">{message}</p>
      </MessageSection>
      <div className="date">{timeDiff}</div>
    </Container>
  );
}

export default NotificationItem;
