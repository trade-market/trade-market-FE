import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUser } from '@hooks/useUser';
import useModal from '@hooks/useModal';
import CommonModal from './common/CommonModal';

function PrivateRoute() {
  const { data: user } = useUser();
  const isLogin = Boolean(user);
  const navigate = useNavigate();
  const { isOpen, open, close } = useModal();

  useEffect(() => {
    if (isLogin) {
      open();
    }
  }, [isLogin]);

  const handleOkClick = () => {
    close();
    navigate('/', { replace: true });
  };

  if (isLogin) {
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
