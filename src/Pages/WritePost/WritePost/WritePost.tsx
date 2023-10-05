import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useModal from '@hooks/useModal';
import ImageBottomSheet from '@components/WritePost/MultiImageUpload/ImageBottomSheet';
import * as O from './WritePostType';

const WritePost = () => {
  const navigate = useNavigate();
  const { tradeType } = useParams();
  const { isOpen, open, close } = useModal();
  
  return (
    <>
      <Wrapper>
        <CommonHeader
          display={'flex'}
          closeClick={() => navigate(`/`)}
          >게시글 작성</CommonHeader>
          {!window.location.pathname.includes('final-check') ?
            <O.PostType>{tradeType === '1:1' ? tradeType : '오퍼'}</O.PostType> : null}  
      </Wrapper>
      <Outlet context={{ open }} />
      {isOpen && <ImageBottomSheet close={close}/> } 
    </>
  );
};

export default WritePost;

const Wrapper = styled.div`
  display: flex;
`;