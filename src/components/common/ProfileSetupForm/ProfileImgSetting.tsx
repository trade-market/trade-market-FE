import React, { useRef, memo } from 'react';
import styled from 'styled-components';
import BigTitle from '@components/common/BigTitle';
import { useLocation } from 'react-router-dom';
import imageCompression from 'browser-image-compression';

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
  const { pathname } = useLocation();

  const imageCompress = async (file: File) => {
    const options = {
      maxSizeMB: 1, // 이미지 최대 용량
      maxWidthOrHeight: 400, // 최대 넓이(혹은 높이)
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(file, options);
      const imageUrl = await imageCompression.getDataUrlFromFile(
        compressedFile
      );

      return { compressedFile, imageUrl };
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFile = e.target.files[0];
      const validTypes = ['image/jpg', 'image/jpeg', 'image/png'];
      if (!validTypes.includes(imageFile.type)) {
        alert(
          '잘못된 파일 형식입니다. jpg, jpeg, png 이미지 파일만 선택해주세요.'
        );
        return;
      }
      const { compressedFile, imageUrl } = await imageCompress(imageFile);
      const blobToFile = new File([compressedFile], `${compressedFile.name}`, {
        type: compressedFile.type,
      });
      handleProfileImgSetting(imageUrl, blobToFile);
    }
  };

  const handleImgClick = () => {
    if (pathname === '/signup') {
      return;
    }
    fileInputRef.current?.click();
  };

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

export default memo(ProfileImgSetting);
