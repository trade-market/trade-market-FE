import { useDispatch, useSelector } from 'react-redux';
import { setPlanTime } from '@/store/slices/ChatSlice';
import { RootState } from '@store/types';
import styled from 'styled-components';
import { size } from '@/styles/theme';
import useModal from '@hooks/useModal';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';
import Calendar from '@components/WritePost/Calendar';
import TimePicker from '../TimePicker';

interface ICalendarModalProps {
  onClick: () => void;
}

const CalendarModal = ({ onClick }: ICalendarModalProps) => {
  const dispatch = useDispatch();
  const selectPlanTime = useSelector((state: RootState) => state.chat.planTime);
  const { isOpen, open, close } = useModal();
  

  return (
    <>
    <Background onClick={onClick} />
      <Container>
        <Calendar
          selectdeadline={selectPlanTime}
          onChange={date => dispatch(setPlanTime(date))}
        />
        <TimeContainer>
          <div>시간</div>
          <div className='time-selector' onClick={open}>오후 3:00</div>
          {isOpen && <TimePicker />}
        </TimeContainer>
        <PostBlueButtons
          option={1}
          disabled={!selectPlanTime}
          BlueButtonName={'완료'}
          BlueButtonClickHandler={onClick}
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

export const TimeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* background-color: yellow; */
  padding: 25px 40px;
  :nth-child(1) {
    font-weight: 500;
  }
  .time-selector {
    color : ${({ theme }) => theme.color.Mainblue};
    background-color: ${({ theme }) => theme.color.lightBlue};
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  

`;