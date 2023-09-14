import { useRef } from 'react';
import styled from 'styled-components';
import BigTitle from '@components/common/BigTitle';

const Container = styled.div`
  margin: 28px 0;
  text-align: center;

  .image-icon {
    width: 110px;
    height: 110px;
    cursor: pointer;
  }

  .border-radius-50 {
    border-radius: 50%;
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

  console.log('render');
  return (
    <>
      <BigTitle>프로필 이미지 설정</BigTitle>
      <Container>
        <img
          src={imgSrc}
          alt="profileImg"
          className={`image-icon ${
            imgSrc.includes('default_profile') ? '' : 'border-radius-50'
          }`}
          onClick={handleImgClick}
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/jpg,image/png,image/jpeg"
          onChange={handleImageChange}
        />
      </Container>
    </>
  );
}

export default ProfileImgSetting;
