import { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import 'react-datepicker/dist/react-datepicker.css';
import arrpw_left from '@Assets/Icons/WritePost/arrpw_left.svg'
import arrow_right from '@Assets/Icons/WritePost/arrow_right.svg'

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    console.log(selectedDate)

    return (
        <Container>
            <DatePicker
                calendarClassName='calender'
                dayClassName={(d) => (d.getDate() === selectedDate!.getDate() ? 'selectedDay' : 'unselectedDay')}
                locale={ko}
                formatWeekDay={x => ''} // 요일은 안보이게 설정
                minDate={new Date()} // minDate 이전 날짜 선택 불가
                // maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                inline
                renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <CalendarHead>
                        <div className="year-month">{getYear(date)}년 {getMonth(date)}월</div>
                        <div className='buttons'>
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                <img src={arrpw_left} />
                            </button>
                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
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

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 15px;

    .calender {
        max-width: 370px;
        width: 100%;
        display: flex;
        border: none;
        background-color: ${({ theme }) => theme.color.bgColor};
        font-family: ${({ theme }) => theme.font.family.Pretendard};
    }

    .selectedDay,
    .unselectedDay {
        padding: 7px 1px;
        width: 42px;
        height: 42px;
        font-size: 16px;
        border-radius: 50%;
        margin: 0 5px;
    }
    .selectedDay {
        background-color: ${({ theme }) => theme.color.activeBlue};
    }

    .react-datepicker {
    border: none;

    // DatePicker 헤더 
        .react-datepicker__header {
            background-color: ${({ theme }) => theme.color.bgColor};
            border-bottom: none;

            // DatePicker 요일 
            .react-datepicker__day-names {
                height: 15px;
            }
        }

        .react-datepicker__day--outside-month { // 이전 달, 다음 달에 해당하는 날짜는 표시되지 않도록 hidden
        cursor: default;
        visibility: hidden;
        }
    }
`;

const CalendarHead = styled.div`
    display: flex;
    padding: 0px 15px;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    justify-content: space-between;
    width: 100%;

    .year-month {
        font-size: 16px;
        font-weight: 500;
    }

    .buttons {
        > button {
            background-color: transparent;
            border: none;
            margin-left: 26px;
            }
        }
`;
