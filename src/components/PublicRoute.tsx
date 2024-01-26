import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUser } from '@hooks/useUser';
import useModal from '@hooks/useModal';
import CommonModal from './common/CommonModal';

// 비로그인 유저만 접근 가능한 페이지를 위한 컴포넌트
function PrivateRoute() {
  const { data: user } = useUser();
  const isLoggedIn = Boolean(user);
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
