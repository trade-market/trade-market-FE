import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AuthService from '@/service/AuthService';
import { Coordinates, NewUserInfo } from '@/types/UserTypes';
import defaultProfileImg from '@Assets/Images/default_profile.svg';
import ProfileSetupForm from '@components/common/ProfileSetupForm';
import { useDispatch } from 'react-redux';
import { setUser } from '@store/slices/userSlice';
import UserService from '@/service/UserService';
import CommonModal from '@components/common/CommonModal';
import useModal from '@hooks/useModal';
import SignUpSuccessModal from '@components/Signup/SignUpSuccessModal';

function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as NewUserInfo;
  const { isOpen, open } = useModal();

  const handleModalOkClick = () => {
    navigate('/', { replace: true });
  };

  if (!state) {
    return (
      <CommonModal
        isOpen={true}
        title="비정상적인 접근입니다."
        closeAction={handleModalOkClick}
      />
    );
  }
  const dispatch = useDispatch();
  const nickname = state.nickname; // Todo: SNS 로그인 시 닉네임 받아오기
  const profileImg = state.profile_image; // Todo: SNS 로그인 시 프로필 이미지 받아오기
  const handleSubmit = async (
    nickname: string,
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
      open();
      setTimeout(() => {
        dispatch(setUser({ ...user, isLogin: true }));
        navigate('/', { replace: true });
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ProfileSetupForm
        defaultProfileImgSrc={profileImg || defaultProfileImg}
        defaultNickname={nickname}
        handleSubmit={handleSubmit}
      />
      <SignUpSuccessModal isOpen={isOpen} />
    </>
  );
}

export default SignUp;
