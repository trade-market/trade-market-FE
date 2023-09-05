import { useState } from 'react';
import * as P from './ProfileSetupFormStyles';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import BlueButton from '@components/common/Buttons/BlueButton';
import ProfileImgSetting from './ProfileImgSetting';
import NicknameSetting from './NicknameSetting';
import AddressSetting from './AddressSetting';
import { Coordinates } from '@/types/UserTypes';
import axios from 'axios';

interface IProfileSetupFormProps {
  defaultProfileImgSrc: string;
  defaultNickname: string;
  address?: string;
  handleSubmit: (Coordinates: Coordinates, town: string) => Promise<void>;
}

function ProfileSetupForm({
  defaultProfileImgSrc,
  defaultNickname,
  address,
  handleSubmit,
}: IProfileSetupFormProps) {
  const [profileImgSrc, setProfileImgSrc] = useState(defaultProfileImgSrc);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [nickname, setNickname] = useState(defaultNickname);
  const [successNickname, setSuccessNickname] = useState(false); // 닉네임 중복확인 성공 여부
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [selectedAddress, setSelectedAddress] = useState(address || '');
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address);
  };
  const handleCoordinates = (coordinates: Coordinates) => {
    setCoordinates(coordinates);
  };

  const handleProfileImgSetting = (imgSrc: string, imgFile: File) => {
    setProfileImgSrc(imgSrc);
    setImgFile(imgFile);
  };

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleNicknameCheck = () => {
    const regex = /^[A-Za-z0-9_가-힣]{2,10}$/; //영문, 한글, 숫자, _ (언더바)2~10자리
    if (!regex.test(nickname)) {
      setNicknameError(
        '닉네임은 2자 이상 최대 10자로\n영문, 한글, 숫자, 특수 문자는 "_" 언더바만 사용할 수 있습니다.'
      );
      return;
    }

    axios
      .post('/auth/nickname', { nickname })
      .then((res) => {
        setSuccessNickname(true);
        setNicknameError(res.data.message);
      })
      .catch((err) => {
        setNicknameError(err.response.data.message);
      });
  };
  /*추후 프로필 편집 api 나오면 재사용 가능하게 onClick 변경 */
  return (
    <>
      <CommonHeader>기본 정보 입력</CommonHeader>
      <P.Wrapper>
        <P.Section>
          <ProfileImgSetting
            imgSrc={profileImgSrc}
            handleProfileImgSetting={handleProfileImgSetting}
          />
          <NicknameSetting
            nickname={nickname}
            disabled={successNickname}
            error={nicknameError}
            handleNickname={handleNickname}
            handleNicknameCheck={handleNicknameCheck}
          />
          <AddressSetting
            selectedAddress={selectedAddress}
            handleAddressSelect={handleAddressSelect}
            handleCoordinates={handleCoordinates}
          />
        </P.Section>
        <BlueButton
          disabled={
            !successNickname ||
            selectedAddress.length < 0 ||
            coordinates === null
          }
          maxWidth="100%"
          onClick={() =>
            handleSubmit(
              coordinates as Coordinates,
              selectedAddress.split(' ').slice(-1).toString()
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
