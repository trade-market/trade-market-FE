import React from 'react';
import NotificationItem from './NotificationItem';
import NoContents from './NoContents';

export interface NotificationType {
  id: string;
  image?: string;
  category: string;
  message: string;
  read: boolean;
  createdAt: string;
}

interface INotificationListProps {
  notifications: NotificationType[]; // Todo: API명세서 확인 후 타입 정의
}

function NotificationList({ notifications }: INotificationListProps) {
  if (notifications.length === 0) {
    return <NoContents />;
  }

  return (
    <>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          id={notification.id}
          category={notification.category}
          image={notification.image}
          message={notification.message}
          read={notification.read}
          createdAt={notification.createdAt}
        />
      ))}
    </>
  );
}

export default NotificationList;
