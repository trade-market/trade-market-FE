import { useEffect } from 'react';
import Spinner from './Spinner';

function KakaoRedirectHandler() {
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    console.log(code);

    // Todo: Server에게 code를 보내고 가입여부 확인.
    // 이미 가입된 유저라면 ('/')로 이동
    // 가입되지 않은 유저라면 ('/profile-setup')로 이동
  }, [code]);

  return <Spinner />;
}

export default KakaoRedirectHandler;
