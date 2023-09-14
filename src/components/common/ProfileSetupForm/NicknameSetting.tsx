import React, { memo } from 'react';
import BigTitle from '@components/common/BigTitle';
import * as S from '@Pages/SingUp/SignUpStyles';
import BlueButton from '@/components/common/Buttons/BlueButton';

interface NicknameSettingProps {
  nickname: string;
  disabled: boolean;
  error: string | null;
  handleNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNicknameCheck: () => void;
}

function NicknameSetting({
  nickname,
  disabled,
  error,
  handleNickname,
  handleNicknameCheck,
}: NicknameSettingProps) {
  return (
    <S.Section>
      <BigTitle>닉네임 설정</BigTitle>
      <S.InputContainer>
        <S.Input
          type="text"
          placeholder="닉네임 입력"
          value={nickname}
          onChange={handleNickname}
          disabled={disabled}
        />
        <BlueButton
          disabled={nickname.length < 2 || disabled}
          onClick={handleNicknameCheck}
        >
          중복확인
        </BlueButton>
      </S.InputContainer>
      {error &&
        error
          .split('\n')
          .map((line, index) => <S.ErrorText key={index}>{line}</S.ErrorText>)}
    </S.Section>
  );
}

export default memo(NicknameSetting);
