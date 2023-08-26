import { useEffect } from 'react';
import Spinner from './Spinner';

function GoogleRedirectHandler() {
  // 1. 인가코드
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    console.log(code);
  }, []);

  return <Spinner />;
}

export default GoogleRedirectHandler;
