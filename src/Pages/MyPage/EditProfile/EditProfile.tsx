import { useDispatch, useSelector } from 'react-redux';
import { Coordinates } from '@/types/UserTypes';
import defaultProfileImg from '@Assets/Images/default_profile.svg';
import ProfileSetupForm from '@components/common/ProfileSetupForm';
import { setUser } from '@store/slices/userSlice';
import UserService from '@/service/UserService';
import { RootState } from '@store/types';

function EditProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleSubmit = async (
    nickname: string,
    coordinates: Coordinates,
    address: string,
    profileImg: File | null
  ) => {
    const userInfo = {
      nickname,
      profileImg,
      coordinates,
      town: address,
    };
    try {
      const data = await UserService.updateUserInfo(userInfo);
      const { user } = await UserService.getUserInfo();
      dispatch(setUser({ ...user, isLogin: true }));
      alert('프로필이 수정되었습니다.');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ProfileSetupForm
      isEdit={true}
      defaultProfileImgSrc={user.profile_image || defaultProfileImg}
      defaultNickname={user.nickname}
      defaultAddress={user.town}
      defaultCoordinates={user.coordinates}
      handleSubmit={handleSubmit}
    />
  );
}

export default EditProfile;
