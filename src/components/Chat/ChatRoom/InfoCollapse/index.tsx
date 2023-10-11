import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPlanDate } from '@/store/slices/ChatSlice';
import { RootState } from '@store/types';
import { format } from "date-fns";
import styled from 'styled-components';
import CollapseButton from '../CollapseButton';
import up_arrow from '@Assets/Icons/Chat/up_arrow.svg';
import { size } from '@/styles/theme';
import UserInfo from './UserInfo';

interface IInfoCollapseProps {
  saleState: string;
}

const InfoCollapse = ({ saleState }: IInfoCollapseProps) => {
  const selectPlanTime = useSelector((state: RootState) => state.chat.planTime.date);
  const planTime = format(new Date(selectPlanTime), `yy년 MM월 dd일`);
  const [closeCollapse, setCloseCollapse] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //* 예약중으로 상태 변경시, default 시간으로 오늘날짜 00:00:00시로 지정
  useEffect(() => {
    if (!selectPlanTime && saleState === '예약중') {
      const now = new Date();
      now.setHours(0,0,0);
      dispatch(setPlanDate(now))
    }
  }, [saleState]);
  
  const renderButton = () => {
    switch (saleState) {
      case '판매중':
        return <CollapseButton onClick={() => navigate('make-plan')}>약속 잡기</CollapseButton>;
      case '예약중':
        return (
          <>
          <CollapseButton
            $bgColor='whiteLightGray'
            $color='activeBlue'
            $isBlock={true}
            >{planTime}</CollapseButton>
            <CollapseButton onClick={() => navigate('make-plan')}>변경하기</CollapseButton> 
          </>
        )
      case '판매완료': 
        return (
          <CollapseButton
            $bgColor={'white'}
            $color={'activeBlue'}
            $borderColor={'activeBlue'}
            onClick={() => navigate('trade-evaluation')}>평가하기</CollapseButton> 
        )
    }
  }

  return (
    <Wrapper>
      <CollapseWrapper $closeCollapse={closeCollapse}>
        <UserInfo />
        <ButtonContainer>
          {renderButton()}
        </ButtonContainer>
      </CollapseWrapper>
      <UpArrow $closeCollapse={closeCollapse} onClick={() => setCloseCollapse(prev => !prev)}>
        <img src={up_arrow}/>
      </UpArrow>
    </Wrapper>
  );
};

export default InfoCollapse;

const Wrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  z-index: 80;
  max-width: ${size.mobile};
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
`;

const CollapseWrapper = styled.div<{ $closeCollapse: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  max-height: ${({ $closeCollapse }) => $closeCollapse ? "0" : "none"};
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UpArrow = styled.div<{ $closeCollapse: boolean }>`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 0.3px solid ${({ theme }) => theme.color.gray};
  padding: 3px;
  > img {
    cursor: pointer;
    transform: ${({ $closeCollapse }) => $closeCollapse ? `scaleY(-1)` : ``}; 
  }
`;