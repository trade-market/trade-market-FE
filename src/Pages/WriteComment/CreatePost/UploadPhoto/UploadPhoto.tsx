<<<<<<< HEAD:src/Pages/WriteComment/CreatePost/UploadPhoto/UploadPhoto.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Progressbar from "@/components/WriteComment/InProgressbar/index";
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import photo from "@Assets/offer/Write-comment/[Progress]upload_photo.svg";
import * as W from "./UploadPhotoStyles";
import PhotoSample from "@Assets/offer/Write-comment/PhotoSample.svg";
=======
import { useNavigate } from 'react-router-dom';
import Progressbar from '@components/WriteComment/Progressbar';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import photo from '@Assets/offer/Write-comment/[Progress]upload_photo.svg';
import * as W from './WriteOwnselfStyles';
import PhotoSample from '@Assets/offer/Write-comment/PhotoSample.svg';
>>>>>>> 7734dff3358bc6bc4e5ef065bff789c0d5add533:src/Pages/Articles/WriteComment/WriteOwnself/WriteOwnself.tsx
import BlueButton from '@/components/common/Buttons/BlueButton';
import BottomSheet from "./BottomSheet/BottomSheet";

const WriteOwnself = () => {
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();


  //todo 3 : 다음 버튼 3/6으로 navigate
  const handleClickNextProgress = () => {
    navigate('/');
  };

  return (
    <>
      {isModalOpen && <BottomSheet closeModal={() => setIsModalOpen(false)} />}
      <CommonHeader />
<<<<<<< HEAD:src/Pages/WriteComment/CreatePost/UploadPhoto/UploadPhoto.tsx
        <ProgressbarHeader />
          <W.Container>
            <div className="title">사진 업로드</div>
            <div className="description">거래하실 물품의 사진을 올려주세요.</div>
            <img src={PhotoSample} onClick={() => setIsModalOpen(true)}/>
            <div>대표사진 1장</div>
          </W.Container>
          <W.ButtonsContainer>
        <BlueButton
          onClick={handleClickNextProgress}
          maxWidth='100%'
          disabled={!isNext}
        >다음</BlueButton>
=======
      <Progressbar number={2} total={6} icon={photo} />
      <W.Container>
        <div className="title">사진 업로드</div>
        <div className="description">거래하실 물품의 사진을 올려주세요.</div>
        <img src={PhotoSample} />
        <div>대표사진 1장</div>
      </W.Container>
      <W.ButtonsContainer>
        <BlueButton
          onClick={handleClickNextProgress}
          maxWidth="100%"
          disabled={true}
        >
          다음
        </BlueButton>
>>>>>>> 7734dff3358bc6bc4e5ef065bff789c0d5add533:src/Pages/Articles/WriteComment/WriteOwnself/WriteOwnself.tsx
      </W.ButtonsContainer>
    </>
  );
};

export default WriteOwnself;
