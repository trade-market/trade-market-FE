import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomSheet from '@components/common/BottomSheet';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import useModal from '@hooks/useModal';
import Menu from '@components/Notifications/Menu';
import useQueryString from '@hooks/useQueryString';
import NotificationList from '@components/Notifications/NotificationList';

const Container = styled.div`
  padding-top: 60px;
`;

const Menubar = styled.div`
  display: flex;
  top: 60px;
  position: sticky;
  width: 100%;
`;

const KeywordSetting = styled.div``;

const RemoveNotification = styled.div`
  color: ${({ theme }) => theme.color.orange};
`;

const keywordNotifications = [
  {
    id: 1,
    image: 'https://www.a-m.co.kr/news/photo/202202/603633_4408_253.jpg',
    category: '아이패드',
    message:
      '지금 상수동에서 아이패드를 물물교환하는 게시물이 올라왔어요. 지금 확인해 보세요.',
    read: false,
    createdAt: '2023-09-01T12:00:00',
  },
  {
    id: 2,
    image: 'https://www.a-m.co.kr/news/photo/202202/603633_4408_253.jpg',
    category: '아이패드',
    message:
      '지금 상수동에서 아이패드를 물물교환하는 게시물이 올라왔어요. 지금 확인해 보세요.',
    read: true,
    createdAt: '2023-09-01T12:00:00',
  },
];

const activityNotifications = [
  {
    id: 1,
    category: '후기 남기기',
    message: '@@님과의 거래는 어떠셨나요? 지금 후기를 남겨보세요.',
    read: false,
    createdAt: '2023-09-01T12:00:00',
  },
  {
    id: 2,
    category: '후기 남기기',
    message: '@@님과의 거래는 어떠셨나요? 지금 후기를 남겨보세요.',
    read: true,
    createdAt: '2023-09-01T12:00:00',
  },
];

function Notifications() {
  const { isOpen, open, close } = useModal();
  const navigate = useNavigate();
  const type = useQueryString('type');

  const checkType = (currentType: string) => type === currentType;

  const handleKeywordMenuClick = () =>
    navigate('?type=keyword', { replace: true });

  const handleActivityMenuClick = () =>
    navigate('?type=activity', { replace: true });

  return (
    <>
      <CommonHeader visibleOption={true} optionClick={open}>
        알림
      </CommonHeader>
      <Container>
        <Menubar>
          <Menu
            isActive={checkType('keyword')}
            title="키워드 알림"
            onClick={handleKeywordMenuClick}
          />
          <Menu
            isActive={checkType('activity')}
            title="활동 알림"
            onClick={handleActivityMenuClick}
          />
        </Menubar>
        {checkType('keyword') && (
          <NotificationList notifications={keywordNotifications} />
        )}
        {checkType('activity') && (
          <NotificationList notifications={activityNotifications} />
        )}
      </Container>
      {isOpen && (
        <BottomSheet height="200px" onClick={close}>
          <KeywordSetting>키워드 설정</KeywordSetting>
          <RemoveNotification>삭제</RemoveNotification>
        </BottomSheet>
      )}
    </>
  );
}

export default Notifications;
