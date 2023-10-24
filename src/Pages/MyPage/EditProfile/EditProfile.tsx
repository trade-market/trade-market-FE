import { useNavigate } from 'react-router-dom';
import { Coordinates } from '@/types/UserTypes';
import defaultProfileImg from '@Assets/Images/default_profile.svg';
import ProfileSetupForm from '@components/common/ProfileSetupForm';
import UserService from '@/service/UserService';
import ConfirmModal from '@components/common/ConfirmModal';
import useModal from '@hooks/useModal';
import { useUser } from '@hooks/useUser';

function EditProfile() {
  const navigate = useNavigate();
  const { data: user } = useUser();
  const { isOpen, open, close } = useModal();

  let userInfoToSubmit = {};

  const handleSubmit = async (
    nickname: string,
    coordinates: Coordinates,
    address: string,
    profileImg: File | null
  ) => {
    userInfoToSubmit = {
      nickname,
      profileImg,
      coordinates,
      town: address,
    };

    open();
  };

  const handleFinalOkClick = async () => {
    try {
      await UserService.updateUserInfo(userInfoToSubmit);
    } catch (err) {
      console.error(err);
    }
    close();
    navigate('/my-page');
  };

  return (
    <>
      <ProfileSetupForm
        isEdit={true}
        defaultProfileImgSrc={user.profile_image || defaultProfileImg}
        defaultNickname={user.nickname}
        defaultAddress={user.town}
        defaultCoordinates={user.coordinates}
        handleSubmit={handleSubmit}
      />
      <ConfirmModal
        isOpen={isOpen}
        title="프로필 수정"
        content="프로필을 수정하시겠습니까?"
        confirmedContent="프로필이 수정되었습니다."
        onFinalOkClick={handleFinalOkClick}
        closeAction={close}
      />
    </>
  );
}

export default EditProfile;
