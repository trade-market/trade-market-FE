import React from 'react';
import styled from 'styled-components';
import EvaluationOption from '../EvaluationOption/EvaluationOption';
import GoodManner_Large from '@Assets/Icons/Chat/GoodManner_Large_Active.svg';
import BadManner_Large from '@Assets/Icons/Chat/BadManner_Large_Active.svg';

interface IEvaluationTitleProps {
  mannerType: string;
  tradeUserNickName: string;
}

const EvaluationTitle = ({
  mannerType,
  tradeUserNickName,
}: IEvaluationTitleProps) => {
  return (
    <TitleContainer>
      <div className="title">
        <img
          className="mannerIcon"
          src={mannerType === 'good' ? GoodManner_Large : BadManner_Large}
        />
        <TitleText>{EvaluationOption[mannerType][0]}</TitleText>
      </div>
      <SubText>{`${tradeUserNickName} 님과의 거래에서 어떤 점이 ${EvaluationOption[mannerType][1]}`}</SubText>
    </TitleContainer>
  );
};

export default EvaluationTitle;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    align-items: center;
    padding: 7px 0;
  }
  .mannerIcon {
    width: 24px;
    height: 24px;
  }
`;

export const TitleText = styled.div`
  color: ${({ theme }) => theme.color.Mainblue};
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.large};
  margin-left: 7px;
`;

const SubText = styled.div`
  color: ${({ theme }) => theme.color.gray};
  font-size: 15px;
`;
