import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import useNavigateButton from '@hooks/useNavigateButton';
import { Outlet } from 'react-router-dom';
import * as O from './F2FStyles';

const F2F = () => {
  const handleCloseButton = useNavigateButton(`/`);

  return (
    <>
      <CommonHeader
        display={'flex'}
        closeClick={handleCloseButton}
      >게시글 작성</CommonHeader>
      <O.PostType>1 : 1</O.PostType>
      <Outlet />
    </>
  );
};

export default F2F;