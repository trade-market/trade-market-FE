import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { CalenderContainer, CalendarHead } from './CalenderStyles';
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
    <CalenderContainer $innerWidth={innerWidth}>
      <DatePicker
        wrapperClassName="myDatePicker"
        dayClassName={(d) =>
          d.getDate() === selectdeadline!.getDate()
            ? 'selectedDay'
            : 'unselectedDay'
        }
        locale={ko}
        formatWeekDay={() => ''} // 요일은 안보이게 설정
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
    </CalenderContainer>
  );
};

export default Calendar;
