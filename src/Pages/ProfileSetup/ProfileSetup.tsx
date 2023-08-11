import { useState } from 'react';
import BigTitle from '../../components/common/BigTitle';
import * as P from './ProfileSetupStyles';
import CommonHeader from '../../components/common/CommonHeader/CommonHeader';

function ProfileSetup() {
  const [nickname, setNickname] = useState('');
  const [address, setAddress] = useState('');

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <CommonHeader>기본 정보 입력</CommonHeader>
      <P.Wrapper>
        <P.Section>
          <P.Section>
            <BigTitle>닉네임 설정</BigTitle>
            <P.InputContainer>
              <P.Input
                type="text"
                placeholder="닉네임 입력"
                value={nickname}
                onChange={handleNickname}
              />
              <P.Button disabled={nickname.length === 0}>중복확인</P.Button>
            </P.InputContainer>
          </P.Section>
          <P.Section>
            <BigTitle>지역 설정</BigTitle>
            <P.InputContainer>
              <P.Input
                type="text"
                placeholder="지번, 도로명, 건물명으로 검색"
                value={address}
                onChange={handleAddress}
              />
              <P.Button disabled={address.length === 0}>검색</P.Button>
            </P.InputContainer>
            <P.CurrentLocationBtn>현재 위치로 설정</P.CurrentLocationBtn>
          </P.Section>
        </P.Section>
        <P.CompleteButton disabled={true}>완료</P.CompleteButton>
      </P.Wrapper>
    </>
  );
}

export default ProfileSetup;
