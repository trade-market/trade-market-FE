import { useEffect } from 'react';
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
  setSelectTime: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
}

const CalendarModal = ({ setSelectTime, onClick }: ICalendarModalProps) => {
  const dispatch = useDispatch();
  const selectPlan = useSelector((state: RootState) => state.chat.planTime);
  const { isOpen, open, close } = useModal();
  const SelectTime = Object.values(selectPlan).filter((_, i) => i !== 0).reduce((acc, cur, i) => {
    acc += ( i === 2 ? `:`  : ` `) + cur;
    return acc;
  }).toString();

  const CheckComplete = (obj: any) => {
    let flag = true; // true이면 객체의 value가 다 있다는 의미
    Object.keys(selectPlan).forEach(key => {
      if (!obj[key]) flag = false;
    })
    return flag;
  };
  
  useEffect(() => {
    setSelectTime(SelectTime);
  }, [selectPlan]);
  
  return (
    <>
      <Container>
        <Calendar
          selectdeadline={selectPlan.date ? selectPlan.date : new Date()}
          onChange={date => dispatch(setPlanDate(date))}
          />
        <TimeContainer>
          <div>시간</div>
          <div
            className={!selectPlan.ap ? 'time-selector unSelect' : 'time-selector'}
            onClick={open}
            >{selectPlan.ap ? SelectTime : '시간 설정'}</div>
        </TimeContainer>
        <PostBlueButtons
          option={1}
          disabled={!CheckComplete(selectPlan)}
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
  padding: 25px 32px;
  font-size : ${({ theme }) => theme.font.size.medium};
  :nth-child(1) {
    font-weight: 500;
  }
  .time-selector {
    border-radius: 8px;
    padding: 8px 10px;
    cursor: pointer;
    color : ${({ theme }) => theme.color.Mainblue};
    background-color: ${({ theme }) => theme.color.lightBlue};

    &.unSelect {
      color : ${({ theme }) => theme.color.lightGray};
      background-color: ${({ theme }) => theme.color.whiteGray};
    }
  }
`;