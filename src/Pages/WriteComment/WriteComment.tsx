import styled from 'styled-components';
import * as W from './WriteCommentStyles';
import BigTitle from '@/components/common/BigTitle';
import Progressbar from '@/components/WriteComment/Progressbar';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import BlueButton from '@components/common/Buttons/BlueButton';
import WriteTypeButton from '@/components/WriteComment/WriteTypeButton';
import emoji_clipboard from '@Assets/Icons/WriteComment/emoji_clipboard.svg';
import emoji_pencil from '@Assets/Icons/WriteComment/emoji_Pencil.svg';
import { useState } from 'react';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const ContentsContainer = styled.div`
  margin-top: -100px;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.color.lightGray};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
`;

function WriteComment() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };

  return (
    <>
      <CommonHeader />
      <W.Container>
        <Progressbar count={1} endCount={3} />
        <ContentsContainer>
          <TitleContainer>
            <BigTitle>게시물 작성 방식</BigTitle>
            <SubTitle>
              원하는 거래 물품 중 기존에 작성해둔 게시물이 있나요?
            </SubTitle>
          </TitleContainer>
          <ButtonsContainer>
            <WriteTypeButton
              onClick={() => handleButtonClick('import')}
              selected={
                selectedButton === null ? null : selectedButton === 'import'
              }
              text="내가 작성한 게시물 가져오기"
              imageSrc={emoji_clipboard}
            />
            <WriteTypeButton
              onClick={() => handleButtonClick('write')}
              selected={
                selectedButton === null ? null : selectedButton === 'write'
              }
              text="직접 작성하기"
              imageSrc={emoji_pencil}
            />
          </ButtonsContainer>
        </ContentsContainer>
        <BlueButton maxWidth="100%" disabled={selectedButton === null}>
          다음
        </BlueButton>
      </W.Container>
    </>
  );
}

export default WriteComment;
