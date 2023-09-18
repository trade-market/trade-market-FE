import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import useModal from '@hooks/useModal';
import CommonModal from './common/CommonModal';

// 로그인 한 유저만 접근 가능한 페이지를 위한 컴포넌트
function PrivateRoute() {
  const auth = useAuth();
  const navigate = useNavigate();
  const { isOpen, open, close } = useModal();

  useEffect(() => {
    if (!auth) {
      open();
    }
  }, [auth]);

  const handleOkClick = () => {
    close();
    navigate('/auth', { replace: true });
  };

  if (!auth) {
    return (
      <CommonModal
        isOpen={isOpen}
        title="로그인이 필요한 서비스입니다."
        closeAction={handleOkClick}
      />
    );
  }
  return <Outlet />;
}

export default PrivateRoute;
