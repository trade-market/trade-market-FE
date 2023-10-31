import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Coordinates } from '@/types/UserTypes';
import defaultProfileImg from '@Assets/Images/default_profile.svg';
import ProfileSetupForm from '@components/common/ProfileSetupForm';
import CommonModal from '@components/common/CommonModal';
import useModal from '@hooks/useModal';
import SignUpSuccessModal from '@components/Signup/SignUpSuccessModal';
import { NewUserResponse, RegisterRequest } from '@/types/AuthTypes';
import { useSignUpMutation } from '@store/api/authApiSlice';
import Spinner from '@components/Auth/Spinner';

function SignUp() {
  const [signUp, { isLoading: isSingUpLoading }] = useSignUpMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as NewUserResponse;
  const { authId, authType, nickname, profileImage } = state;
  const [userInfo, setUserInfo] = useState<RegisterRequest>({
    authId,
    authType,
    nickname,
    profileImage,
    imageFile: null,
    latitude: '',
    longitude: '',
  });
  const { isOpen: isSignUpModalOpen, open: signUpModalOpen } = useModal();

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

  const handleSuccessfulSignUp = async () => {
    signUpModalOpen();
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);
  };

  const handleError = (error: any) => {
    console.error(error);
    alert('회원가입에 실패했습니다. error: ' + error);
    navigate('/auth', { replace: true });
  };

  // Todo: API 명세서에는 town을 받지 않게 되어 있는데 어떻게 할 것인지?
  const handleSubmit = async (
    nickname: string,
    coordinates: Coordinates,
    town: string,
    profileImgFile: File | null
  ) => {
    setUserInfo((prev) => ({
      ...prev,
      nickname,
      imageFile: profileImgFile,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    }));
    try {
      const result = await signUp(userInfo).unwrap();
      if (result.code === 201) {
        await handleSuccessfulSignUp();
      } else if (result.code === 400) {
        throw new Error(result.message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <ProfileSetupForm
        defaultProfileImgSrc={profileImage || defaultProfileImg}
        defaultNickname={nickname}
        handleSubmit={handleSubmit}
      />
      <SignUpSuccessModal isOpen={isSignUpModalOpen} />
      {isSingUpLoading && <Spinner />}
    </>
  );
}

export default SignUp;
