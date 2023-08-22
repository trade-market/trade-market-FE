import { useNavigate } from 'react-router-dom'; 
import Progressbar from "@/components/Articles/WriteComment/InProgressbar/index";
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import photo from "@Assets/offer/Write-comment/[Progress]upload_photo.svg";
import * as W from "./WriteOwnselfStyles";
import PhotoSample from "@Assets/offer/Write-comment/PhotoSample.svg";
import BlueButton from '@/components/common/Buttons/BlueButton';

const ProgressbarHeader = () => {
  return (
      <W.ProgressWrapper>
        <Progressbar
          progressNumber='2'
          progressTotal='6'
          progressIcon={photo}
          />
      </W.ProgressWrapper>
  )
}

const WriteOwnself = () => {
  const navigate = useNavigate();
  //todo 1 : 사진 업로드
  //todo 2 : 사진 업로드에 따른 다음 active

  //todo 3 : 다음 버튼 3/6으로 navigate
  const handleClickNextProgress = () => {
    navigate('/');
  }

  return (
    <>
      <CommonHeader />
        <ProgressbarHeader />
          <W.Container>
            <div className="title">사진 업로드</div>
            <div className="description">거래하실 물품의 사진을 올려주세요.</div>
            <img src={PhotoSample} />
            <div>대표사진 1장</div>
          </W.Container>
          <W.ButtonsContainer>
        <BlueButton
          onClick={handleClickNextProgress}
          maxWidth='420px'
        >다음</BlueButton>
          </W.ButtonsContainer>
    </>
  );
};

export default WriteOwnself;