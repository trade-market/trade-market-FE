import PostBlueButtons from '@components/WritePost/_commons/PostBlueButtons/PostBlueButtons';
import ConfirmModal from '@components/common/ConfirmModal';
import useModal from '@hooks/useModal';
import React, { useState } from 'react';
import MyEvaluation from '../MyEvaluation/MyEvaluation';
import EvaluationListItem from './EvaluationListItem';
import EvaluationTitle from './EvaluationTitle/EvaluationTitle';
import { Wrapper } from './syles';

interface IEvaluationListProps {
  mannerType: string;
  tradeUserNickName: string;
  isComplete: boolean;
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const EvaluationList = ({
  mannerType,
  tradeUserNickName,
  isComplete,
  setIsComplete,
}: IEvaluationListProps) => {
  const [select, setSelect] = useState<Set<string>>(new Set());
  const { isOpen, open, close } = useModal();

  const selectMannerHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickList = e.currentTarget.innerText;
    if (select.has(clickList)) {
      setSelect((prev) => {
        const newSelect = new Set(prev);
        newSelect.delete(clickList);
        return newSelect;
      });
    } else {
      setSelect((prev) => new Set([...prev, clickList]));
    }
  };

  const handleConfirm = () => {
    setIsComplete(true);
    close();
  };

  const renderEvaluationList = () => {
    switch (isComplete) {
      case false: // 매너 점수 주기 vs 비매너 점수 주기
        return (
          <>
            <Wrapper>
              <EvaluationTitle
                mannerType={mannerType}
                tradeUserNickName={tradeUserNickName}
              />
              <EvaluationListItem
                mannerType={mannerType}
                select={select}
                selectMannerHandler={selectMannerHandler}
              />
            </Wrapper>
            <PostBlueButtons
              option={1}
              disabled={!(select.size > 0)}
              BlueButtonName={'완료'}
              BlueButtonClickHandler={open}
            />
          </>
        );
      case true: // 내가 남긴 평가
        return <MyEvaluation mannerType={mannerType} select={select} />;
    }
  };

  return (
    <>
      {renderEvaluationList()}
      {isOpen && (
        <ConfirmModal
          isOpen={isOpen}
          title="평가를 완료하시겠습니까?"
          content={`한번 완료한 평가는 수정하기 어려우니 \n 신중하게 평가해주시길 바랍니다.`}
          confirmedContent={`${tradeUserNickName} 님에 \n 대한 평가가 완료되었습니다.`}
          onConfirmAction={handleConfirm}
          closeAction={close}
          confirmType={'완료'}
        />
      )}
    </>
  );
};

export default EvaluationList;
