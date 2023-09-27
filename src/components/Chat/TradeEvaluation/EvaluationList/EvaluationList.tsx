import { useState } from 'react';
import styled from 'styled-components';
import GoodManner_Large from '@Assets/Icons/Chat/GoodManner_Large_Active.svg';
import BadManner_Large from '@Assets/Icons/Chat/BadManner_Large_Active.svg';
import EvaluationOption from './EvaluationOption';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';
import useModal from '@hooks/useModal';
import ConfirmModal from '@components/common/ConfirmModal';
import MyEvaluation from '../MyEvaluation';

interface IEvaluationListProps {
  mannerType: string;
  tradeUserId: string;
  isComplete: boolean;
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const EvaluationList = ({ mannerType, tradeUserId, isComplete, setIsComplete }: IEvaluationListProps) => {
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
  }

  const handleConfirm = () => {
    setIsComplete(true);
    close();
  };

  return (
    <>
      {
      !isComplete ?
        <>
          <Wrpper>
            <TitleContainer>
              <div className='title'>
                <img className='mannerIcon' src={mannerType === 'good' ? GoodManner_Large : BadManner_Large} />
                <TitleText>{EvaluationOption[mannerType][0]}</TitleText>
              </div>
              <SubText>{`${tradeUserId} 님과의 거래에서 어떤 점이 ${EvaluationOption[mannerType][1]}`}</SubText>
            </TitleContainer>
            <ListConTainer>
              {
                [...EvaluationOption[mannerType][2]].map((list, idx) => (
                  <ListBox
                  key={idx}
                  className={select.has(list) ? 'active' : ''}
                  onClick={selectMannerHandler}
                  >{list}
                  </ListBox>
                ))
              }
            </ListConTainer>
            </Wrpper>
            <PostBlueButtons
              option={1}
              disabled={!(select.size > 0)}
              BlueButtonName={'완료'}
              BlueButtonClickHandler={open}
            />
        </>
        :
        <MyEvaluation
          mannerType={mannerType}
          select={select} />
      }
      {isOpen &&
        <ConfirmModal
        isOpen={isOpen}
        title="평가를 완료하시겠습니까?"
        content={`한번 완료한 평가는 수정하기 어려우니 \n 신중하게 평가해주시길 바랍니다.`}
        confirmedContent={`${tradeUserId} 님에 \n 대한 평가가 완료되었습니다.`}
        onFinalOkClick={handleConfirm}
        closeAction={close}
        confirmType={'완료'}
        />}
    </>
  );
};

export default EvaluationList;

export const Wrpper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 60px;
`;

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

export const ListConTainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  gap: 25px;
`;

export const ListBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.font.size.base};
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 8px;
  cursor: pointer;

  &.active, &.my {
    border: 1px solid ${({ theme }) => theme.color.Mainblue};
    color : ${({ theme }) => theme.color.Mainblue};
  }

  &.my {
    cursor: not-allowed;
  }
`;