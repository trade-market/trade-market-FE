import { useState } from 'react';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import ContentsSection from '@/components/WriteComment/ContentsSection';
import TitleSection from '@components/WriteComment/TitleSection';
import EvaluationTypeButton from '@components/Chat/TradeEvaluation/EvaluationTypeButton/EvaluationTypeButton';
import GoodManner_Large from '@Assets/Icons/Chat/GoodManner_Large.svg';
import BadManner_Large from '@Assets/Icons/Chat/BadManner_Large.svg';
import EvaluationList from '@components/Chat/TradeEvaluation/EvaluationList/EvaluationList';

const TradeEvaluation = () => {
  const [MannerType, setMannerType] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const tradeUserNickName = '세모난 수박';

  const renderWriteTypeButton = (
    buttonId: string,
    text: string,
    imageSrc: string
  ) => (
    <EvaluationTypeButton
      onClick={() => setMannerType(buttonId)}
      selected={MannerType === buttonId}
      text={text}
      imageSrc={imageSrc}
    />
  );

  const renderEvaluationComponent = () => {
    switch (MannerType) {
      case null: // 매너 점수 주기 vs 비매너 점수 주기
        return (
          <ContentsSection>
            <TitleSection
              h3Text={`${tradeUserNickName} 님과의 거래가 어떠셨나요?`}
            />
            <ButtonsContainer>
              {renderWriteTypeButton(
                'good',
                '매너 점수 주기',
                GoodManner_Large
              )}
              {renderWriteTypeButton(
                'bad',
                '비매너 점수 주기',
                BadManner_Large
              )}
            </ButtonsContainer>
          </ContentsSection>
        );
      default: // 내가 남긴 평가
        return (
          <ListContainer>
            <EvaluationList
              mannerType={MannerType}
              tradeUserNickName={tradeUserNickName}
              isComplete={isComplete}
              setIsComplete={setIsComplete}
            />
          </ListContainer>
        );
    }
  };

  return (
    <>
      <CommonHeader>{!isComplete ? '평가하기' : '내가 남긴 평가'}</CommonHeader>
      <Container>{renderEvaluationComponent()}</Container>
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

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  color: ${({ theme }) => theme.color.gray};
`;
