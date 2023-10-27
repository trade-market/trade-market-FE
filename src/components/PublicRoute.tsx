import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import useModal from '@hooks/useModal';
import { useEffect } from 'react';
import CommonModal from './common/CommonModal';

// 비로그인 유저만 접근 가능한 페이지를 위한 컴포넌트
function PublicRoute() {
  const auth = useAuth();
  const navigate = useNavigate();
  const { isOpen, open, close } = useModal();

  useEffect(() => {
    if (auth) {
      open();
    }
  }, [auth]);

  const handleOkClick = () => {
    close();
    navigate('/', { replace: true });
  };

  if (auth) {
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

export default PublicRoute;
