import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '@store/types';
import { setImagePost } from '@/store/slices/WritePostSlice';
import styled from 'styled-components';
import postImage from '@Assets/Icons/WritePost/postImage.svg';
import button_x from '@Assets/Icons/WritePost/button_x.svg';

interface IMultiImageUploadProps {
  open: () => void;
}

const MultiImageUpload = ({ open }: IMultiImageUploadProps) => {
  const { exchangeType } = useParams();
  const dispatch = useDispatch();
  const selectImages = useSelector((state: RootState) => state.WritePost.image);

  //* X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id: number) => {
    dispatch(setImagePost(selectImages.filter((_, index) => index !== id)));
  };

  useEffect(() => {
    dispatch(setImagePost([]));
  }, [exchangeType]);

  return (
    <>
      <ImageContainer>
        {selectImages.map((image, id) => (
          <div key={id}>
            <img className="image" src={image} alt={`${image}-${id}`} />
            <DeleteButton onClick={() => handleDeleteImage(id)}>
              <img src={button_x} />
            </DeleteButton>
          </div>
        ))}
        {selectImages.length < 5 ? (
          <img className="image" src={postImage} onClick={open} />
        ) : null}
      </ImageContainer>
    </>
  );
};

export default MultiImageUpload;

const ImageContainer = styled.div`
  display: flex;
  padding-top: 15px;
  flex-wrap: wrap;
  gap: 12px;
  @media screen and (max-width: 390px) {
    gap: 8px;
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
    bottom: 50px;
    left: 45px;
  }
`;
