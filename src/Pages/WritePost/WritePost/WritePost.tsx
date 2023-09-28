import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/types';
import { setImagePost } from '@/store/slices/WritePostSlice';
import { Outlet } from 'react-router-dom';
import useModal from '@hooks/useModal';
import BottomSheet from '@/components/common/BottomSheet';
import * as O from './WritePostType';

const WritePost = () => {
  const navigate = useNavigate();
  const { tradeType } = useParams();
  const { isOpen, open, close } = useModal();
  const selectImages = useSelector((state: RootState) => state.WritePost.image);
  const dispatch = useDispatch();

  //* 이미지를 가져와 URL을 생성한다.
  const handleAddImages = (e: React.ChangeEvent) => {
    const imageLists = (e.target as HTMLInputElement).files as FileList;
    let imageUrlLists = [...selectImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }
    
    dispatch(setImagePost(imageUrlLists));
    close();
  };
  
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
        {isOpen &&
          (<BottomSheet height={'140px'} onClick={close}>
            <label className='single'>
              사진 앨범
              <input 
              type='file'
              id='file'
              accept='image/*'
              multiple
              onChange={handleAddImages}
              />
            </label>
          </BottomSheet>)
          } 
    </>
  );
};

export default WritePost;

const Wrapper = styled.div`
  display: flex;
`;