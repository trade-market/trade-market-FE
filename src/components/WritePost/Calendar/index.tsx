import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { getYear, getMonth } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import arrpw_left from '@Assets/Icons/WritePost/arrpw_left.svg';
import arrow_right from '@Assets/Icons/WritePost/arrow_right.svg';

interface ICalendarProps {
  selectdeadline: Date | null;
  onChange: (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) => void;
}

const Calendar = ({ onChange, selectdeadline }: ICalendarProps) => {
  const months = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  return (
    <Container $innerWidth={innerWidth}>
      <DatePicker
        wrapperClassName="myDatePicker"
        dayClassName={(d) =>
          d.getDate() === selectdeadline!.getDate()
            ? 'selectedDay'
            : 'unselectedDay'
        }
        locale={ko}
        formatWeekDay={(x) => ''} // 요일은 안보이게 설정
        minDate={new Date()} // minDate 이전 날짜 선택 불가
        // maxDate={new Date()} // maxDate 이후 날짜 선택 불가
        selected={selectdeadline}
        onChange={onChange}
        inline
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <CalendarHead>
            <div className="year-month">
              {getYear(date)}년 {months[getMonth(date)]}월
            </div>
            <div className="buttons">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <img src={arrpw_left} />
              </button>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <img src={arrow_right} />
              </button>
            </div>
          </CalendarHead>
        )}
      />
    </Container>
  );
};

export default Calendar;

const Container = styled.div<{ $innerWidth: number }>`
  margin-top: 15px;

  .selectedDay,
  .unselectedDay {
    padding: 7px 0px;
    width: 42px;
    height: 42px;
    font-size: 16px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.white};
    @media screen and (min-width: 395px) {
      margin: 3px calc(4.5px + 0.1vw);
    }
  }
  .selectedDay {
    background-color: ${({ theme }) => theme.color.activeBlue};
  }
  .unselectedDay {
    &[aria-disabled='false'] {
      &:hover {
        color: ${({ theme }) => theme.color.activeBlue};
        background-color: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.activeBlue};
      }
    }
  }
  .react-datepicker,
  .react-datepicker__header,
  .react-datepicker__month {
    background-color: ${({ theme }) => theme.color.white};
    margin: 0 auto;
    border: none;
  }
  .react-datepicker {
    font-family: ${({ theme }) => theme.font.family.Pretendard};
    width: 100%;
    justify-content: space-between;
    display: flex;
  }
  .react-datepicker__day--outside-month {
    // 이전 달, 다음 달에 해당하는 날짜는 표시되지 않도록 hidden
    cursor: default;
    visibility: hidden;
  }
  .react-datepicker__month-container,
  .react-datepicker__month {
    width: 100%;
    white-space: nowrap;
  }
`;
const CalendarHead = styled.div`
  display: flex;
  padding-left: 20px;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  .year-month {
    font-size: 16px;
    font-weight: 500;
  }
  .buttons {
    > button {
      background-color: transparent;
      border: none;
      width: 52px;
      height: 10px;
    }
  }
`;
=======
import Calendar from './Calender';

export default Calendar;
>>>>>>> Stashed changes
