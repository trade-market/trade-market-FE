import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '@/service/AuthService';
import { OAuthServiceType } from '@/types/AuthTypes';
import { NewUserInfo } from '@/types/UserTypes';
import Spinner from './Spinner';
import UserService from '@/service/UserService';
import { useDispatch } from 'react-redux';
import { setUser } from '@store/slices/userSlice';
import useQueryString from '@hooks/useQueryString';

interface IOAuthRedirectHandlerProps {
  service: OAuthServiceType;
}

function OAuthRedirectHandler({ service }: IOAuthRedirectHandlerProps) {
  const code = useQueryString('code') as string; // 인가 코드
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleOAuthLogin = async () => {
      try {
        const res = await AuthService.loginWithOauth(service, code);
        const { isNew } = res;

        if (isNew) {
          navigate('/signup', { state: { ...(res.user as NewUserInfo) } });
          return;
        }

        const data = await UserService.getUserInfo();
        dispatch(setUser({ ...data.user, isLogin: true }));
        navigate('/', { replace: true });
      } catch (error) {
        console.error(error);
      }
    };
    handleOAuthLogin();
  }, [service]);

  return <Spinner />;
}

export default OAuthRedirectHandler;
