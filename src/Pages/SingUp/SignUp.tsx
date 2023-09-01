import userDefaultImg from '@Assets/Images/user_default_img.svg';
import ProfileSetupForm from '@components/common/ProfileSetupForm';

function SignUp() {
  const nickname = ''; // Todo: SNS 로그인 시 닉네임 받아오기
  const profileImg = ''; // Todo: SNS 로그인 시 프로필 이미지 받아오기
  return (
    <ProfileSetupForm
      defaultProfileImgSrc={profileImg || userDefaultImg}
      defaultNickname={nickname}
      handleSubmit={() => {}}
    />
  );
}

export default SignUp;
