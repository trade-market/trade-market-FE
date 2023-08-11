import React from 'react';
import BigTitle from '@components/common/BigTitle';
import * as P from '@Pages/ProfileSetup/ProfileSetupStyles';

interface NicknameSettingProps {
  nickname: string;
  error: string | null;
  handleNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNicknameCheck: () => void;
}

const NicknameSetting: React.FC<NicknameSettingProps> = ({
  nickname,
  error,
  handleNickname,
  handleNicknameCheck,
}) => {
  return (
    <P.Section>
      <BigTitle>닉네임 설정</BigTitle>
      <P.InputContainer>
        <P.Input
          type="text"
          placeholder="닉네임 입력"
          value={nickname}
          onChange={handleNickname}
        />
        <P.Button disabled={nickname.length < 2} onClick={handleNicknameCheck}>
          중복확인
        </P.Button>
      </P.InputContainer>
      {error && <P.ErrorText>{error}</P.ErrorText>}
    </P.Section>
  );
};

export default NicknameSetting;
