import { useState } from 'react';
import * as P from './ProfileSetupStyles';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import NicknameSetting from '@components/ProfileSetup/NicknameSetting';
import AddressSetting from '@components/ProfileSetup/AddressSetting';

function ProfileSetup() {
  const [nickname, setNickname] = useState('');
  const [successNickname, setSuccessNickname] = useState(false); // 닉네임 중복확인 성공 여부
  const [error, setError] = useState<string | null>(null);

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleNicknameCheck = () => {
    const regex = /^[A-Za-z0-9_가-힣]{2,10}$/; //영문, 한글, 숫자, _ (언더바)2~10자리
    if (!regex.test(nickname)) {
      setError(
        '닉네임은 2자 이상 최대 10자로, 영문, 한글, 숫자, 특수 문자는 "_" 언더바만 사용할 수 있습니다.'
      );
      return;
    }

    // Todo: 닉네임 중복확인 API 호출 및 성공 여부
    // 성공시 닉네임 input 비활성화 + 중복확인 버튼 비활성화 + error 메시지 삭제
  };

  //Todo: 주소 검색 API로  호출

  // Todo: 완료 버튼 활성화 여부
  // 닉네임 중복확인 성공 && 주소 검색 성공

  return (
    <>
      <CommonHeader>기본 정보 입력</CommonHeader>
      <P.Wrapper>
        <P.Section>
          <NicknameSetting
            nickname={nickname}
            error={error}
            handleNickname={handleNickname}
            handleNicknameCheck={handleNicknameCheck}
          />
          <AddressSetting />
        </P.Section>
        <P.CompleteButton disabled={true}>완료</P.CompleteButton>
      </P.Wrapper>
    </>
  );
}

export default ProfileSetup;
