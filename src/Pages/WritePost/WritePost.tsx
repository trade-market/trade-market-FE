import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import ContentsSection from '@/components/WriteComment/ContentsSection';
import TitleSection from '@components/WriteComment/TitleSection';
import WriteTypeButton from '@components/WriteComment/WriteTypeButton';
import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import BlueButton from '@components/common/Buttons/BlueButton';
import * as W from './WritePostStyles';
import trade_1vs1 from '@Assets/Icons/WritePost/trade_1vs1.svg';
import trade_offer from '@Assets/Icons/WritePost/trade_offer.svg';

const WritePost = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleTypeButtonClick = (buttonId: string) =>
    setSelectedButton(buttonId);

  const handleNextButtonClick = () => navigate(`${selectedButton}`);

 //* close 버튼
  const handleCloseButton = () => {
    navigate(`/`);
  }

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
      size={'80px'}
    />
  ); 

  return (
    <>
      <CommonHeader
        display={'flex'}
        closeClick={handleCloseButton}
        >게시글 작성</CommonHeader>
        <W.Container>
          <ContentsSection>
            <TitleSection
              h1Text="거래 방법 선택"
              h2Text="거래하실 방법을 선택해주세요."
            />
            <W.ButtonsContainer>
              {renderWriteTypeButton('one-on-one',trade_1vs1,'1:1')}
              {renderWriteTypeButton('offer', trade_offer, '오퍼')}
            </W.ButtonsContainer>
          </ContentsSection>
        </W.Container>
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
};

export default WritePost;