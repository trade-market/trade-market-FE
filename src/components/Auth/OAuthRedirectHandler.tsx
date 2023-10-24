import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NewUserResponse, OAuthServiceType } from '@/types/AuthTypes';
import Spinner from './Spinner';
import UserService from '@/service/UserService';
import { setUser } from '@store/slices/userSlice';
import useQueryString from '@hooks/useQueryString';
import { useLoginMutation } from '@store/api/authApiSlice';

interface IOAuthRedirectHandlerProps {
  serviceName: OAuthServiceType;
}

function OAuthRedirectHandler({ serviceName }: IOAuthRedirectHandlerProps) {
  const code = useQueryString('code') as string; // 인가 코드
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleSuccessfulLogin = async () => {
    const user = await UserService.getUserInfo();
    dispatch(setUser({ ...user }));
    navigate('/', { replace: true });
  };

  const handleNewUser = (newUserResponse: NewUserResponse) => {
    navigate('/signup', { replace: true, state: { ...newUserResponse } });
  };

  const handleError = (error: any) => {
    console.error(error);
    alert('로그인에 실패했습니다. error: ' + error);
    navigate('/auth', { replace: true });
  };

  useEffect(() => {
    const handleOAuthLogin = async () => {
      try {
        const result = await login({ serviceName, code }).unwrap();
        if (result.code === 200) {
          await handleSuccessfulLogin();
        } else if (result.code === 301) {
          handleNewUser(result as NewUserResponse);
        } else {
          throw new Error('알 수 없는 응답 코드' + result.code);
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
