import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as W from './WriteCommentStyles';
import Progressbar from '@components/WriteComment/Progressbar';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import BlueButton from '@components/common/Buttons/BlueButton';
import WriteTypeButton from '@components/WriteComment/WriteTypeButton';
import icon_pencil from '@Assets/icons/WriteComment/Pencil.svg';
import emoji_clipboard from '@Assets/Icons/WriteComment/emoji_clipboard.svg';
import emoji_pencil from '@Assets/Icons/WriteComment/emoji_Pencil.svg';
import TitleSection from '@components/WriteComment/TitleSection';
import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import ContentsSection from '@/components/WriteComment/ContentsSection';

function WriteComment() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleTypeButtonClick = (buttonId: string) =>
    setSelectedButton(buttonId);

  const handleNextButtonClick = () => navigate(`${selectedButton}/2`);

  const renderWriteTypeButton = (
    buttonId: string,
    imageSrc: string,
    text: string
  ) => (
    <WriteTypeButton
      onClick={() => handleTypeButtonClick(buttonId)}
      selected={selectedButton === buttonId}
      text={text}
      imageSrc={imageSrc}
    />
  );

  return (
    <>
      <CommonHeader />
      <Progressbar number={1} total={6} icon={icon_pencil} />
      <ContentsSection>
        <TitleSection
          h1Text="게시물 작성 방식"
          h2Text="원하는 거래 물품 중 기존에 작성해둔 게시물이 있나요?"
        />
        <W.ButtonsContainer>
          {renderWriteTypeButton(
            'get-post',
            emoji_clipboard,
            '내가 작성한 게시물 가져오기'
          )}
          {renderWriteTypeButton('create-post', emoji_pencil, '직접 작성하기')}
        </W.ButtonsContainer>
      </ContentsSection>
      <BottomBtnSection>
        <BlueButton
          maxWidth="100%"
          disabled={!selectedButton}
          onClick={handleNextButtonClick}
        >
          다음
        </BlueButton>
      </BottomBtnSection>
    </>
  );
}

export default WriteComment;
