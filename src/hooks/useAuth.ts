import { RootState } from '@store/types';
import { useSelector } from 'react-redux';

function useAuth() {
  return useSelector((state: RootState) => state.user.isLogin);
}

export default useAuth;
