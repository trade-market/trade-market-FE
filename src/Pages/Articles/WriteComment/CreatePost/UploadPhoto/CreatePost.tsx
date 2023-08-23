import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import Progressbar from '@components/WriteComment/Progressbar';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import photo from "@Assets/offer/Write-comment/[Progress]upload_photo.svg";
import * as W from "./UploadPhotoStyles";
import PhotoSample from "@Assets/offer/Write-comment/PhotoSample.svg";
import BlueButton from '@/components/common/Buttons/BlueButton';
import BottomSheet from "./BottomSheet/BottomSheet";

const WriteOwnself = () => {
  const [isCreatePost, setIsCreatePost] = useState({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isGetimage = Object.keys(isCreatePost).includes('image');

  const handleClickNextProgress = () => {
    navigate(`/articles/${id}/write-comment/create-post/3`)
  };

    //* 이미지를 가져와 URL을 생성한다.
  const handleGetImage = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles = targetFilesArray.map((file) => URL.createObjectURL(file)).toString();
    setIsCreatePost({
      image : selectedFiles
    });
  }

  // isCreatePost.image

  return (
    <>
      {isModalOpen &&
        <BottomSheet
        closeModal={() => setIsModalOpen(false)}
        handleGetImage={handleGetImage}
        isCreatePost={isCreatePost}
        />}
      
      <CommonHeader />
      <Progressbar number={2} total={6} icon={photo} />
      <W.Container>
        <div className="title">사진 업로드</div>
        <div className="description">거래하실 물품의 사진을 올려주세요.</div>
        <img src={PhotoSample} onClick={() => setIsModalOpen(true)} />
        <div>대표사진 1장</div>
      </W.Container>
      <W.ButtonsContainer>
        <BlueButton
          onClick={handleClickNextProgress}
          maxWidth="100%"
          disabled={isGetimage ? false : true}
        >다음</BlueButton>
      </W.ButtonsContainer>
    </>
  );
};

export default WriteOwnself;
