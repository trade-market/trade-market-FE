import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import { getYear, getMonth } from "date-fns";
import 'react-datepicker/dist/react-datepicker.css';
import arrpw_left from '@Assets/Icons/WritePost/arrpw_left.svg'
import arrow_right from '@Assets/Icons/WritePost/arrow_right.svg'

interface ICalendarProps {
    dispatchType: any;
    selectdeadline: Date | null;
}

const Calendar = ({dispatchType, selectdeadline} : ICalendarProps) => {
    const dispatch = useDispatch();
    const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    return (
        <Container>
            <DatePicker
                calendarClassName='calender'
                dayClassName={(d) => (d.getDate() === selectdeadline!.getDate() ? 'selectedDay' : 'unselectedDay')}
                locale={ko}
                formatWeekDay={x => ''} // 요일은 안보이게 설정
                minDate={new Date()} // minDate 이전 날짜 선택 불가
                // maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                selected={selectdeadline}
                onChange={date => dispatch(dispatchType(date))}
                inline
                renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <CalendarHead>
                        <div className="year-month">{getYear(date)}년 {months[getMonth(date)]}월</div>
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
    height: 100%;
    width: 100%;
    margin-top: 15px;
    overflow: hidden;
    overflow: scroll;

    .calender {
        display: flex;
        border: none;
        background-color: ${({ theme }) => theme.color.bgColor};
        font-family: ${({ theme }) => theme.font.family.Pretendard};
        width: 100%;
    }

    .selectedDay,
    .unselectedDay {
        padding: 8px 0px;
        width: 42px;
        height: 42px;
        font-size: 16px;
        border-radius: 50%;
        margin: 3px 5px;
    }
    .selectedDay {
        background-color: ${({ theme }) => theme.color.activeBlue};
    }
    //Date 전체
    .react-datepicker__month{
        width: 100%;
        display: flex;
        /* margin-left: 3px; */
        padding-left: 3px;
        justify-content: center;
        flex-wrap: wrap;
    } 
    .react-datepicker {
    border: none;
    display: flex;
        // DatePicker 헤더 
        .react-datepicker__header {
            background-color: ${({ theme }) => theme.color.white};
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

    /* @media screen and (max-width: 400px) {
        // 달력 전체
        .react-datepicker__month-container {
            max-width: calc(360px - 7%);
            font-size: 14px;
        }
        //Date 전체
        .react-datepicker__month {
            max-width: calc(300px - 15%);
        }
        .selectedDay,.unselectedDay {
            margin: 3px calc(5px - 0.5%);
        }
    } */
`;

const CalendarHead = styled.div`
    display: flex;
    padding: 0px 7px 0 20px;
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
            margin-left: 30px;
            }
        }
`;
