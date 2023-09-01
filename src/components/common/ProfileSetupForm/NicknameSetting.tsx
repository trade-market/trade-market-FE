import React from 'react';
import BigTitle from '@components/common/BigTitle';
import * as S from '@Pages/SingUp/SignUpStyles';
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
    <S.Section>
      <BigTitle>닉네임 설정</BigTitle>
      <S.InputContainer>
        <S.Input
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
      </S.InputContainer>
      {error &&
        error
          .split('\n')
          .map((line, index) => <S.ErrorText key={index}>{line}</S.ErrorText>)}
    </S.Section>
  );
};

export default NicknameSetting;
