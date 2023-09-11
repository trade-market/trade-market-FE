import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import * as O from './WritePostType';

const WritePost = () => {
  const navigate = useNavigate();
  const { exchangeType, tradeType } = useParams();

  // console.log(exchangeType, tradeType)
  
  return (
    <>
      <CommonHeader
        display={'flex'}
        closeClick={() => navigate(`/`)}
      >게시글 작성</CommonHeader>
      {!window.location.pathname.includes('final-check') ? <O.PostType>{tradeType === '1:1' ? tradeType : '오퍼'}</O.PostType> : null}  
      <Outlet />
    </>
  );
};

export default WritePost;