import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoodManner_Large from '@Assets/Icons/Chat/GoodManner_Large_Active.svg';
import BadManner_Large from '@Assets/Icons/Chat/BadManner_Large_Active.svg';
import PostBlueButtons from '@components/WritePost/PostBlueButtons/PostBlueButtons';
import * as M from './EvaluationList/EvaluationListStyles';

interface IMyEvaluationProps {
  mannerType: string;
  select: Set<string>;
}

const MyEvaluation = ({ mannerType, select }: IMyEvaluationProps) => {
  const navigate = useNavigate();
  return (
    <>
      <M.Wrapper>
        <M.TitleContainer>
          <div className="title">
            <img
              className="mannerIcon"
              src={mannerType === 'good' ? GoodManner_Large : BadManner_Large}
            />
            <M.TitleText>
              {mannerType === 'good' ? '긍정적 평가' : '부정적 평가'}
            </M.TitleText>
          </div>
        </M.TitleContainer>
        <M.ListConTainer>
          {[...select].map((list, idx) => (
            <M.ListBox key={idx} className="my">
              {list}
            </M.ListBox>
          ))}
        </M.ListConTainer>
      </M.Wrapper>
      <PostBlueButtons
        option={1}
        disabled={false}
        BlueButtonName={'홈'}
        BlueButtonClickHandler={() => navigate('/', { replace: true })}
      />
    </>
  );
};

export default MyEvaluation;
