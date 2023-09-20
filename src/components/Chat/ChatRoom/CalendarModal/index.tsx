import { useDispatch, useSelector } from 'react-redux';
import { setPlanDate } from '@/store/slices/ChatSlice';
import { RootState } from '@store/types';
import styled from 'styled-components';
import { size } from '@/styles/theme';
import useModal from '@hooks/useModal';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';
import Calendar from '@components/WritePost/Calendar';
import TimeController from '../TimeController';

interface ICalendarModalProps {
  onClick: () => void;
}

const CalendarModal = ({ onClick }: ICalendarModalProps) => {
  const dispatch = useDispatch();
  const selectPlanAP = useSelector((state: RootState) => state.chat.planTime.ap);
  const selectPlan = useSelector((state: RootState) => state.chat.planTime);
  const { isOpen, open, close } = useModal();

  
  
  console.log(selectPlan)

  return (
    <>
      <Container>
        <Calendar
          selectdeadline={selectPlan.date}
          onChange={date => dispatch(setPlanDate(date))}
          />
        <TimeContainer>
          <div>시간</div>
          <div
            className={!selectPlan.ap ? 'time-selector unSelect' : 'time-selector'}
            onClick={open}
            >{selectPlan.ap ? selectPlanAP : '시간 설정'}</div>
        </TimeContainer>
        <PostBlueButtons
          option={1}
          disabled={!selectPlanAP}
          BlueButtonName={'완료'}
          BlueButtonClickHandler={onClick}
          />
      </Container>
      {isOpen &&
        <>
          <Background onClick={onClick}/>
          <TimeController
            isOpen={isOpen}
            closeAction={close}
          />
        </>
        }
    </>
  );
};

export default CalendarModal;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  z-index: 95;
  transition: transform 650ms ease-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${size.mobile};
  max-height: 455px;
  height: 100%;
  padding: 10px 0;
  z-index: 90;
  position: fixed;
  bottom: 0;
  border-radius: 8px 16px 0 0;
  background-color: ${({ theme }) => theme.color.bgColor};
  box-shadow: 1px 1px 3px 1px ${({ theme }) => theme.color.gray};
  animation: bottomUp 0.3s ease-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes bottomUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  :nth-child(1) {
    font-weight: 500;
  }
  .time-selector {
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
    color : ${({ theme }) => theme.color.Mainblue};
    background-color: ${({ theme }) => theme.color.lightBlue};

    &.unSelect {
      color : ${({ theme }) => theme.color.lightGray};
      background-color: ${({ theme }) => theme.color.whiteGray};
    }
  }
`;

const ButtonContainer = styled.div`
  

`;