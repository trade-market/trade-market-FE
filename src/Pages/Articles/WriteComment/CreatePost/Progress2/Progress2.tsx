import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/types';
import { setImagePost } from '@/store/slices/CreateCommentSlice';
import ProcessCompo from '@components/WriteComment/CreatePost/ProcessCompo/ProcessCompo';
import photo from '@Assets/offer/Write-comment/[Progress]upload_photo.svg';
import * as W from './Progresss2Styles';
import PhotoSample from '@Assets/offer/Write-comment/PhotoSample.svg';
import BottomSheet from '@/components/common/BottomSheet';

const Progress2 = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selectImage = useSelector(
    (state: RootState) => state.createComment.image
  );

  //* 이미지를 가져와 URL을 생성한다.
  const handleGetImage = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const selectedFiles = URL.createObjectURL(targetFiles[0]);
    dispatch(setImagePost(selectedFiles));
    setIsModalOpen(false);
  };

  return (
    <>
      <ProcessCompo
        n={2}
        ProgessIcon={photo}
        text={['사진 업로드', '거래하실 물품의 사진을 올려주세요.']}
        disabled={selectImage ? false : true}
      />
      <W.Container>
        <img
          src={selectImage ? selectImage : PhotoSample}
          onClick={() => setIsModalOpen(true)}
        />
        <div>대표사진 1장</div>
      </W.Container>
      {isModalOpen && (
        <BottomSheet height={'140px'} onClick={() => setIsModalOpen(false)}>
          <label className="single">
            사진 앨범
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleGetImage}
            />
          </label>
        </BottomSheet>
      )}
    </>
  );
};

export default Progress2;
