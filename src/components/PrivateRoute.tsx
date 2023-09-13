import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '@hooks/useAuth';

// 로그인 한 유저만 접근 가능한 페이지를 위한 컴포넌트
function PrivateRoute() {
  const auth = useAuth();

  if (!auth) {
    alert('로그인이 필요한 기능입니다.');
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
