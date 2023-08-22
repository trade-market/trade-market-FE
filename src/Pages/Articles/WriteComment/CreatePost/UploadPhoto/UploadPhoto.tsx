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
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleClickNextProgress = () => {
    navigate(`/articles/${id}/write-comment/create-post/3`)
  };

  return (
    <>
      {isModalOpen && <BottomSheet closeModal={() => setIsModalOpen(false)} />}
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
          disabled={!isNext}
        >
          다음
        </BlueButton>
      </W.ButtonsContainer>
    </>
  );
};

export default WriteOwnself;
