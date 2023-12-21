import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUser } from '@hooks/useUser';
import useModal from '@hooks/useModal';
import CommonModal from './common/CommonModal';

function PrivateRoute() {
  const isLoggedIn = useUser();
  const navigate = useNavigate();
  const { isOpen, open, close } = useModal();

  useEffect(() => {
    if (isLoggedIn) {
      open();
    }
  }, [isLoggedIn]);

  const handleOkClick = () => {
    close();
    navigate('/', { replace: true });
  };

  if (isLoggedIn) {
    return (
      <CommonModal
        isOpen={isOpen}
        title="비정상적인 접근입니다."
        closeAction={handleOkClick}
      />
    );
  }

  return <Outlet />;
}

export default PrivateRoute;
