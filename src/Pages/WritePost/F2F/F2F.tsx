import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import * as O from './F2FStyles';

const F2F = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <CommonHeader
        display={'flex'}
        closeClick={() => navigate(`/`)}
      >게시글 작성</CommonHeader>
      {!window.location.pathname.includes('final-check') ? <O.PostType>1 : 1</O.PostType> : null}  
      <Outlet />
    </>
  );
};

export default F2F;