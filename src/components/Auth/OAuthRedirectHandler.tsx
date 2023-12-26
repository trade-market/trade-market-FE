import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewUserResponse, OAuthServiceType } from '@/types/AuthTypes';
import Spinner from './Spinner';
import useQueryString from '@hooks/useQueryString';
import { useLoginMutation } from '@store/api/authApiSlice';
import { useDispatch } from 'react-redux';
import { login as loggedIn } from '@store/slices/authSlice';

interface IOAuthRedirectHandlerProps {
  serviceName: OAuthServiceType;
}

function OAuthRedirectHandler({ serviceName }: IOAuthRedirectHandlerProps) {
  const code = useQueryString('code') as string; // 인가 코드
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSuccessfulLogin = async () => {
    navigate('/', { replace: true });
  };

  const handleNewUser = (newUserResponse: NewUserResponse) => {
    navigate('/signup', { replace: true, state: { ...newUserResponse } });
  };

  const handleError = (error: any) => {
    alert('로그인에 실패했습니다. error: ' + error);
    navigate('/auth', { replace: true });
  };

  useEffect(() => {
    const handleOAuthLogin = async () => {
      try {
        const result = await login({ serviceName, code }).unwrap();
        if (result.message.includes('신규 회원')) {
          handleNewUser(result as NewUserResponse);
        } else {
          await handleSuccessfulLogin();
          dispatch(loggedIn());
        }
      } catch (error) {
        handleError(error);
      }
    };
    handleOAuthLogin();
  }, [serviceName]);

  return <Spinner />;
}

export default OAuthRedirectHandler;
