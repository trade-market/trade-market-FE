import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AuthService from '@/service/AuthService';
import { Coordinates, NewUserInfo } from '@/types/UserTypes';
import userDefaultImg from '@Assets/Images/user_default_img.svg';
import ProfileSetupForm from '@components/common/ProfileSetupForm';
import { useDispatch } from 'react-redux';
import { setUser } from '@store/slices/userSlice';
import UserService from '@/service/UserService';

function SignUp() {
  const dispatch = useDispatch();
  const location = useLocation();
  const state = location.state as NewUserInfo;
  if (!state) {
    alert('비정상적인 접근입니다.');
    return <Navigate to="/" replace />;
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
      const { user } = await UserService.getUserInfo();
      dispatch(setUser({ ...user, isLogin: true }));
      navigate('/', { replace: true });
    } catch (err) {
      console.error(err);
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
