import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '@store/types';
import { setImagePost } from '@/store/slices/WriteF2FPostSlice';
import styled from 'styled-components';
import BottomSheet from '@/components/common/BottomSheet';
import postImage from '@Assets/Icons/WritePost/postImage.svg';
import button_x from '@Assets/Icons/WritePost/button_x.svg';

const MultiImageUpload = () => {
  const { type } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selectImages = useSelector((state: RootState) => state.WriteF2FPost.image);

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
    setIsModalOpen(false);
  };

  //* X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id: number) => {
    dispatch(setImagePost(selectImages.filter((_, index) => index !== id)));
  };

  useEffect(() => {
    // console.log(type)
    dispatch(setImagePost([]));
  }, [type]);


  return (
    <>
      <ImageContainer>
        {selectImages.map((image, id) => (
          <div key={id}>
            <img className='image' src={image} alt={`${image}-${id}`} />
              <DeleteButton onClick={() => handleDeleteImage(id)}>
                  <img src={button_x} />
              </DeleteButton>
          </div>
        ))} 
        {selectImages.length < 5 ?
          <img className='image' src={postImage} onClick={() => setIsModalOpen(true)} />
          : null}
      </ImageContainer>
      {isModalOpen &&
        <BottomSheet height={'140px'} optionP={'on'} onClick={() => setIsModalOpen(false)}>
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
        </BottomSheet>
        } 
    </>
  );
};

export default MultiImageUpload;

const ImageContainer = styled.div`
  display: flex;
  padding-top: 15px;
  flex-wrap: wrap;
  gap : 12px;

  @media screen and (max-width: 390px) {
    gap : 8px;
  }

  .image {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  position: relative;

  > img {
  position: absolute;
  bottom : 50px;
  left: 45px;
  }
`;