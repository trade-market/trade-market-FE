import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import ContentsSection from '@/components/WriteComment/ContentsSection';
import TitleSection from '@components/WriteComment/TitleSection';
import EvaluationTypeButton from '@components/Chat/TradeEvaluation/EvaluationTypeButton/EvaluationTypeButton';
import GoodManner_Large from '@Assets/Icons/Chat/GoodManner_Large.svg';
import BadManner_Large from '@Assets/Icons/Chat/BadManner_Large.svg';

const TradeEvaluation = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleTypeButtonClick = (buttonId: string) =>
    setSelectedButton(buttonId);

  const handleNextButtonClick = () => navigate(`${selectedButton}/select-element`);

  const renderWriteTypeButton = (
    buttonId: string,
    imageSrc: string,
    text: string
  ) => (
    <EvaluationTypeButton
      onClick={() => handleTypeButtonClick(buttonId)}
      selected={selectedButton === buttonId}
      text={text}
      imageSrc={imageSrc}
    />
  ); 

  
  return (
    <>
      <CommonHeader>평가하기</CommonHeader>
      <Container>
        <ContentsSection>
          <TitleSection
          h3Text="세모난 수박 님과의 거래가 어떠셨나요?"
          />
          <ButtonsContainer>
          {renderWriteTypeButton('1:1', GoodManner_Large,'매너 점수 주기')}
          {renderWriteTypeButton('offer', BadManner_Large, '비매너 점수 주기')}
          </ButtonsContainer>
        </ContentsSection>
      </Container>
    </>
  );
};

export default TradeEvaluation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  color: ${({ theme }) => theme.color.gray};
`;


