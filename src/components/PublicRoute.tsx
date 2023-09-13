import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@hooks/useAuth';

// 비로그인 유저만 접근 가능한 페이지를 위한 컴포넌트
function PublicRoute() {
  const auth = useAuth();

  if (auth) {
    alert('비정상적인 접근입니다.');
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default PublicRoute;
