import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultProfileImg from '@Assets/Images/default_profile.svg';
import ProfileSetupForm from '@components/common/ProfileSetupForm';
import ConfirmModal from '@components/common/ConfirmModal';
import useModal from '@hooks/useModal';
import { useUser } from '@hooks/useUser';
import { useUpdateUserInfoMutation } from '@store/api/userApiSlice';
import Spinner from '@components/Auth/Spinner';

function EditProfile() {
  const navigate = useNavigate();
  // const { data: user } = useUser();
  // todo: 타입 추가 정의
  const [userInfo, setUserInfo] = useState({});
  const { isOpen, open, close } = useModal();
  const [updateUser, { isLoading: isUpdateUserLoading }] =
    useUpdateUserInfoMutation();

  const handleSubmit = async (
    nickname: string,
    // coordinates: Coordinates,
    address: string,
    profileImg: File | null
  ) => {
    setUserInfo({
      nickname,
      profileImg,
      // coordinates,
      town: address,
    });

    open();
  };

  const handleUpdateUser = async () => {
    try {
      await updateUser(userInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const onModalCompleteButtonClick = () => {
    navigate('/my-page');
  };

  return (
    <>
      <ProfileSetupForm
        isEdit={true}
        defaultProfileImgSrc={'' || defaultProfileImg}
        defaultNickname={'임시'}
        defaultAddress={'임시'}
        // defaultCoordinates={null}
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
