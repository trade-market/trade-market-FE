import React, { useCallback, useState, useEffect } from 'react';
import * as P from './ProfileSetupFormStyles';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import BlueButton from '@components/common/Buttons/BlueButton';
import ProfileImgSetting from './ProfileImgSetting';
import NicknameSetting from './NicknameSetting';
import AddressSetting from './AddressSetting';
import { Coordinates } from '@/types/UserTypes';

interface IProfileSetupFormProps {
  isEdit?: boolean;
  defaultProfileImgSrc: string;
  defaultNickname: string;
  defaultCoordinates?: Coordinates;
  defaultAddress?: string;
  handleSubmit: (
    nickname: string,
    Coordinates: Coordinates,
    address: string,
    profileImg: File | null
  ) => Promise<void>;
}

function ProfileSetupForm({
  isEdit = false,
  defaultProfileImgSrc,
  defaultNickname,
  defaultCoordinates,
  defaultAddress,
  handleSubmit,
}: IProfileSetupFormProps) {
  const [profileImgSrc, setProfileImgSrc] = useState(defaultProfileImgSrc);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [nickname, setNickname] = useState(defaultNickname);
  const [nicknameError, setNicknameError] = useState<string>('');
  const [selectedAddress, setSelectedAddress] = useState(defaultAddress || '');
  const [coordinates, setCoordinates] = useState<Coordinates | null>(
    defaultCoordinates || null
  );

  const handleAddressSelect = useCallback((address: string) => {
    setSelectedAddress(address);
  }, []);
  const handleCoordinates = useCallback((coordinates: Coordinates) => {
    setCoordinates(coordinates);
  }, []);

  const handleProfileImgSetting = useCallback(
    (imgSrc: string, imgFile: File) => {
      setProfileImgSrc(imgSrc);
      setImgFile(imgFile);
    },
    []
  );

  const handleNicknameCheck = useCallback(() => {
    const regex = /^[A-Za-z0-9_가-힣]{2,10}$/; //영문, 한글, 숫자, _ (언더바)2~10자리
    if (!regex.test(nickname)) {
      setNicknameError(
        '닉네임은 2자 이상 최대 10자로\n영문, 한글, 숫자, 특수 문자는 "_" 언더바만 사용할 수 있습니다.'
      );
    } else {
      setNicknameError('');
    }
  }, [nickname]);

  const handleNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(e.target.value);
    },
    [nicknameError]
  );

  useEffect(() => {
    const identifier = setTimeout(() => {
      handleNicknameCheck();
    }, 300);
    return () => {
      clearTimeout(identifier);
    };
  }, [handleNicknameCheck, nickname]);

  return (
    <>
      <CommonHeader>{isEdit ? '프로필 편집' : '기본 정보 입력'}</CommonHeader>
      <P.Wrapper>
        <P.Section>
          <ProfileImgSetting
            imgSrc={profileImgSrc}
            handleProfileImgSetting={handleProfileImgSetting}
          />
          <NicknameSetting
            nickname={nickname}
            error={nicknameError}
            handleNickname={handleNickname}
          />
          <AddressSetting
            selectedAddress={selectedAddress}
            handleAddressSelect={handleAddressSelect}
            handleCoordinates={handleCoordinates}
          />
        </P.Section>
        <BlueButton
          disabled={
            nicknameError.length > 1 || !nickname || coordinates === null
          }
          maxWidth="100%"
          onClick={() =>
            handleSubmit(
              nickname,
              coordinates as Coordinates,
              selectedAddress,
              imgFile
            )
          }
        >
          완료
        </BlueButton>
      </P.Wrapper>
    </>
  );
}

export default ProfileSetupForm;
