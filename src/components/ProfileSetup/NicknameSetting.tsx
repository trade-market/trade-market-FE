import React from 'react';
import BigTitle from '@components/common/BigTitle';
import * as P from '@Pages/ProfileSetup/ProfileSetupStyles';
import BlueButton from '@/components/common/Buttons/BlueButton';

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
        <BlueButton
          disabled={nickname.length < 2}
          onClick={handleNicknameCheck}
        >
          중복확인
        </BlueButton>
      </P.InputContainer>
      {error && <P.ErrorText>{error}</P.ErrorText>}
    </P.Section>
  );
};

export default NicknameSetting;
