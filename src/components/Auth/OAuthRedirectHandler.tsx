import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '@/service/AuthService';
import { OAuthServiceType } from '@/types/AuthTypes';
import { NewUserInfo } from '@/types/UserTypes';
import Spinner from './Spinner';

interface IOAuthRedirectHandlerProps {
  service: OAuthServiceType;
}

function OAuthRedirectHandler({ service }: IOAuthRedirectHandlerProps) {
  // 1. 인가코드
  const code = new URL(window.location.href).searchParams.get('code') as string;
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthLogin = async () => {
      try {
        const res = await AuthService.loginWithOauth(service, code);
        const { isNew } = res;
        if (isNew) {
          navigate('/signup', { state: { ...(res.user as NewUserInfo) } });
          return;
        }
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
