import { setDeadlinePost } from '@/store/slices/WritePostSlice';
import arrow_right from '@Assets/Icons/WritePost/arrow_right.svg';
import arrpw_left from '@Assets/Icons/WritePost/arrpw_left.svg';
import { useAppDispatch, useAppSelector } from '@store/store';
import { getMonth, getYear } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarHead, CalenderContainer } from './styles';

const Calendar = () => {
  const dispatch = useAppDispatch();
  const selectdeadline = useAppSelector((state) => state.WritePost.deadline);
  const months = Array.from({ length: 12 }, (_, index) => index + 1).map(
    String
  );

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
        onChange={(date) => dispatch(setDeadlinePost(date))}
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
