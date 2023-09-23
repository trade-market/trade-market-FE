import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkAll, toggleCheckboxVisible } from '@store/slices/CheckboxSlice';
import ConfirmModal from '@components/common/ConfirmModal';
import styled from 'styled-components';
import BottomSheet from '@components/common/BottomSheet';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import useModal from '@hooks/useModal';
import Menu from '@components/Notifications/Menu';
import useQueryString from '@hooks/useQueryString';
import NotificationList from '@components/Notifications/NotificationList';
import useCheckboxState from '@hooks/useCheckboxState';
import CancelContainer from '@components/Notifications/CancelContainer';

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

const DeleteNotification = styled.div`
  color: ${({ theme }) => theme.color.orange};
`;

const keywordNotifications = [
  {
    id: '1',
    image: 'https://www.a-m.co.kr/news/photo/202202/603633_4408_253.jpg',
    category: '아이패드',
    message:
      '지금 상수동에서 아이패드를 물물교환하는 게시물이 올라왔어요. 지금 확인해 보세요.',
    read: false,
    createdAt: '2023-09-01T12:00:00',
  },
  {
    id: '2',
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
    id: '1',
    category: '후기 남기기',
    message: '@@님과의 거래는 어떠셨나요? 지금 후기를 남겨보세요.',
    read: false,
    createdAt: '2023-09-01T12:00:00',
  },
  {
    id: '2',
    category: '후기 남기기',
    message: '@@님과의 거래는 어떠셨나요? 지금 후기를 남겨보세요.',
    read: true,
    createdAt: '2023-09-01T12:00:00',
  },
];

const KEYWORD = 'keyword';
const ACTIVITY = 'activity';

function Notifications() {
  const { isOpen, open, close } = useModal();
  const {
    isOpen: isOpenConfirm,
    open: openConfirm,
    close: closeConfirm,
  } = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const type = useQueryString('type');
  const [visibleDeleteBtn, setVisibleDeleteBtn] = useState<boolean>(false);
  const { checkedItems, resetCheckboxState } = useCheckboxState();

  const checkType = (currentType: string) => type === currentType;
  const isKeyword = checkType(KEYWORD);
  const isActivity = checkType(ACTIVITY);

  const handleMenuClick = (currentType: string) => {
    navigate(`?type=${currentType}`, { replace: true });
  };

  // Option Modal에서 삭제 버튼 클릭 시
  const handleDeleteBtnInModal = () => {
    close();
    setVisibleDeleteBtn(true);
    dispatch(toggleCheckboxVisible());
  };

  // 헤더의 '삭제' 버튼 클릭 시
  const handleHeaderDeleteBtnClick = () => {
    if (checkedItems.length === 0) {
      return;
    }
    openConfirm();
  };

  // 알림 삭제 API 호출
  const handleNotificationDelete = () => {
    console.log(checkedItems);
    setVisibleDeleteBtn(false);
    closeConfirm();
    resetCheckboxState();
  };

  // 전체 선택
  const handleSelectAllClick = () => {
    let notificationIds: string[] = [];

    if (isKeyword) {
      notificationIds = keywordNotifications.map(
        (notification) => notification.id
      );
    } else if (isActivity) {
      notificationIds = activityNotifications.map(
        (notification) => notification.id
      );
    }

    if (notificationIds) {
      dispatch(checkAll(notificationIds));
    }

    openConfirm();
  };

  // 삭세 상태 취소
  const handleCancelCheck = () => {
    resetCheckboxState();
    setVisibleDeleteBtn(false);
  };

  const resetNotificationState = () => {
    resetCheckboxState();
    if (visibleDeleteBtn) {
      setVisibleDeleteBtn(false);
    }
  };

  // URL 변경 시 체크박스 및 삭제할 목록 초기화 + 헤더 삭제 버튼 숨기기
  useEffect(() => {
    resetNotificationState();

    return () => {
      resetNotificationState();
    };
  }, [type]);

  return (
    <>
      <CommonHeader
        visibleOption={!visibleDeleteBtn}
        optionClick={open}
        visibleDeleteBtn={visibleDeleteBtn}
        onDeleteClick={handleHeaderDeleteBtnClick}
        onCancelClick={handleCancelCheck}
      >
        알림
      </CommonHeader>
      <Container>
        <Menubar>
          <Menu
            isActive={isKeyword}
            title="키워드 알림"
            onClick={() => handleMenuClick(KEYWORD)}
          />
          <Menu
            isActive={isActivity}
            title="활동 알림"
            onClick={() => handleMenuClick(ACTIVITY)}
          />
        </Menubar>
        {visibleDeleteBtn && (
          <CancelContainer handleSelectAllClick={handleSelectAllClick} />
        )}
        {isKeyword && <NotificationList notifications={keywordNotifications} />}
        {isActivity && (
          <NotificationList notifications={activityNotifications} />
        )}
      </Container>
      {isOpen && (
        <BottomSheet height="200px" onClick={close}>
          <KeywordSetting>키워드 설정</KeywordSetting>
          <DeleteNotification onClick={handleDeleteBtnInModal}>
            삭제
          </DeleteNotification>
        </BottomSheet>
      )}
      <ConfirmModal
        isOpen={isOpenConfirm}
        closeAction={closeConfirm}
        title={`${checkedItems.length}개 알림을 삭제하시겠습니까?`}
        confirmedTitle="삭제 완료"
        content="삭제한 알림은 복구하기 어렵습니다."
        confirmedContent="알림이 삭제되었습니다."
        onFinalOkClick={handleNotificationDelete}
      />
    </>
  );
}

export default Notifications;
