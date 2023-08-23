import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import InfoComponent from '../InfoComponent';
import photo from "@Assets/offer/Write-comment/[Progress]upload_photo.svg";
import * as W from "./Progresss2Styles";
import PhotoSample from "@Assets/offer/Write-comment/PhotoSample.svg";
import BottomSheet from "./BottomSheet/BottomSheet";

const Progress2 = () => {
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
    const selectedFiles = URL.createObjectURL(targetFiles[0]);
    setIsCreatePost({
      image : selectedFiles
    });
  }

  return (
    <>
      <InfoComponent
        n={2}
        ProgessIcon={photo}
        title={"사진 업로드"}
        description1={"거래하실 물품의 사진을 올려주세요."}
        disabled={isGetimage ? false : true}
        maxWidth={'100%'}
        />
        <W.Container>
          <img
            className={!isGetimage ? 'sample' : 'get-image'}
            src={!isGetimage ? PhotoSample : isCreatePost?.image}
            onClick={() => setIsModalOpen(true)} />
          <div>대표사진 1장</div>
        </W.Container>
        {isModalOpen &&
          <BottomSheet
            closeModal={() => setIsModalOpen(false)}
            handleGetImage={handleGetImage}
            isCreatePost={isCreatePost}
            />}
    </>
  );
};

export default Progress2;
