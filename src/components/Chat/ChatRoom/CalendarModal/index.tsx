import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlanTime } from '@/store/slices/ChatSlice';
import { RootState } from '@store/types';
import styled from 'styled-components';
import { size } from '@/styles/theme';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';
import Calendar from '@components/WritePost/Calendar';

interface ICalendarModalProps {
  onClick: () => void;
}

const CalendarModal = ({ onClick }: ICalendarModalProps) => {
  const dispatch = useDispatch();
  const selectPlanTime = useSelector((state: RootState) => state.chat.planTime);


  console.log('selectPlanTime', selectPlanTime)
  
  return (
    <>
    <Background onClick={onClick} />
    <Container>
        <Calendar
          selectdeadline={selectPlanTime}
          onChange={date => dispatch(setPlanTime(date))}
        />
      <PostBlueButtons
        option={1}
        disabled={!selectPlanTime}
        BlueButtonName={'완료'}
        BlueButtonClickHandler={()=> console.log('hj')}
        />
      </Container>
    </>
  );
};

export default CalendarModal;


const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 140;
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
  z-index: 150;
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
