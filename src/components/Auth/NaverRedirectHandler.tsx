import { useEffect } from 'react';
import Spinner from './Spinner';

function NaverRedirectHandler() {
  // 1. 인가코드
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    console.log(code);
    if (code === null) {
      window.location.href = '/auth';
    }
  }, [code]);

  return <Spinner />;
}

export default NaverRedirectHandler;
