import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '@store/slices/userSlice';
import AuthService from '@/service/AuthService';
import { OAuthServiceType } from '@/types/AuthTypes';
import { NewUserInfo, User } from '@/types/UserTypes';
import Spinner from './Spinner';

interface IOAuthRedirectHandlerProps {
  service: OAuthServiceType;
}

function OAuthRedirectHandler({ service }: IOAuthRedirectHandlerProps) {
  // 1. 인가코드
  const code = new URL(window.location.href).searchParams.get('code') as string;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthLogin = async () => {
      try {
        const res = await AuthService.loginWithOauth(service, code);
        const { isNew, user } = res;
        if (isNew) {
          navigate('/signup', { state: { ...(user as NewUserInfo) } });
          return;
        }
        dispatch(setUser({ ...(user as User), isLogin: true }));
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
