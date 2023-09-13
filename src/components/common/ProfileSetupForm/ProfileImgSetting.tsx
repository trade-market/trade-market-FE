import { useRef } from 'react';
import styled from 'styled-components';
import BigTitle from '@components/common/BigTitle';
import cameraIcon from '@Assets/Icons/camera.svg';

const Container = styled.div`
  margin: 28px 0;
  text-align: center;

  .profile-img {
    max-width: 110px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;

    .image-icon {
      border-radius: 50%;
      width: 110px;
      height: 110px;
    }

    .camera-icon {
      width: 24px;
      height: 24px;
      padding: 6px;
      margin-left: -30px;
      border-radius: 24px;
      background-color: ${({ theme }) => theme.color.gray};
    }
  }
`;

interface IProfileImgSettingProps {
  imgSrc: string;
  handleProfileImgSetting: (imgSrc: string, imgFile: File) => void;
}

function ProfileImgSetting({
  imgSrc,
  handleProfileImgSetting,
}: IProfileImgSettingProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      handleProfileImgSetting(imageUrl, imageFile);
    }
  };

  const handleImgClick = () => fileInputRef.current?.click();

  return (
    <>
      <BigTitle>프로필 이미지 설정</BigTitle>
      <Container>
        <div className="profile-img" onClick={handleImgClick}>
          <img src={imgSrc} alt="profileImg" className="image-icon" />
          <img src={cameraIcon} alt="camera-icon" className="camera-icon" />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/jpg,image/png,image/jpeg"
            onChange={handleImageChange}
          />
        </div>
      </Container>
    </>
  );
}

export default ProfileImgSetting;
