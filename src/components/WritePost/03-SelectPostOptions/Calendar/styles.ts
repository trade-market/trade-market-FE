import styled from 'styled-components';

export const CalenderContainer = styled.div<{ $innerWidth: number }>`
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

export const CalendarHead = styled.div`
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
