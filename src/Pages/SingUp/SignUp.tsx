import { useLocation, useNavigate } from 'react-router-dom';
import AuthService from '@/service/AuthService';
import { Coordinates, NewUserInfo } from '@/types/UserTypes';
import userDefaultImg from '@Assets/Images/user_default_img.svg';
import ProfileSetupForm from '@components/common/ProfileSetupForm';
import { useDispatch } from 'react-redux';

function SignUp() {
  const location = useLocation();
  const state = location.state as NewUserInfo;
  if (!state) {
    window.location.href = '/auth';
    return null;
  }
  const navigate = useNavigate();
  const nickname = state.nickname; // Todo: SNS 로그인 시 닉네임 받아오기
  const profileImg = state.profile_image; // Todo: SNS 로그인 시 프로필 이미지 받아오기
  const handleSubmit = async (
    coordinates: Coordinates,
    town: string,
    profileImgFile: File | null
  ) => {
    const userInfo = {
      nickname,
      profileImg,
      profileImgFile,
      coordinates,
      town,
    };
    try {
      const data = await AuthService.signUp(userInfo);
      navigate('/', { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProfileSetupForm
      defaultProfileImgSrc={profileImg || userDefaultImg}
      defaultNickname={nickname}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignUp;
