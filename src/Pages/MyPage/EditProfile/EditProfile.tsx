import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultProfileImg from '@Assets/Images/default_profile.svg';
import ProfileSetupForm from '@components/common/ProfileSetupForm';
import ConfirmModal from '@components/common/ConfirmModal';
import useModal from '@hooks/useModal';
import { useUser } from '@hooks/useUser';
import { useUpdateUserInfoMutation } from '@store/api/userApiSlice';
import Spinner from '@components/Auth/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetState,
  setLatitude,
  setLongitude,
  setRegionCode,
} from '@store/slices/coordinateSlice';
import { RootState } from '@store/types';
import { IUpdateUser } from '@/types/UserTypes';

function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { regionCode, latitude, longitude } = useSelector(
    (state: RootState) => state.coordinateSetup
  );
  const {
    data: { data: user },
  } = useUser();
  const nickname = useRef(user?.nickname);
  const imgFile = useRef<File | null>(null);
  const { isOpen, open, close } = useModal();
  const [updateUser, { isLoading: isUpdateUserLoading }] =
    useUpdateUserInfoMutation();

  const handleSubmit = async (newNickname: string, newImgFile: File) => {
    nickname.current = newNickname;
    imgFile.current = newImgFile;
    open();
  };

  const handleUpdateUser = async () => {
    const formData: IUpdateUser = {
      request: {
        nickname: nickname.current,
        addressRequest: {
          regionCode,
          latitude,
          longitude,
          type: 'main',
        },
      },
    };
    if (imgFile.current) {
      formData['file'] = imgFile.current;
    }

    try {
      await updateUser(formData).unwrap();
    } catch (error: any) {
      throw new Error(error.data.message);
    }
  };

  const onModalCompleteButtonClick = () => {
    navigate('/my-page');
  };

  useEffect(() => {
    dispatch(setRegionCode(user?.address.hdongCode));
    dispatch(setLatitude(user?.address.latitude));
    dispatch(setLongitude(user?.address.longitude));

    return () => {
      dispatch(resetState());
    };
  }, []);

  return (
    <>
      <ProfileSetupForm
        isEdit={true}
        defaultProfileImgSrc={user.profileImage || defaultProfileImg}
        defaultNickname={user.nickname}
        defaultAddress={`${user.address.siDo} ${user.address.guGunSi} ${user.address.hdongName}`}
        handleSubmit={handleSubmit}
      />
      <ConfirmModal
        isOpen={isOpen}
        title="프로필 수정"
        content="프로필을 수정하시겠습니까?"
        confirmedContent="프로필이 수정되었습니다."
        onConfirmAction={handleUpdateUser}
        onCompletedAction={onModalCompleteButtonClick}
        closeAction={close}
      />
      {isUpdateUserLoading && <Spinner />}
    </>
  );
}

export default EditProfile;
