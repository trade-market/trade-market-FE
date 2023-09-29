import styled from 'styled-components';
import { format } from "date-fns";

interface IDateBarProps {
  date: Date;
}

const DateBar = ({date} : IDateBarProps) => {
  const ChatDate = format(new Date(date), `yyyy년 MM월 dd일`);

  return (
    <Wrapper>
      <div className='chat-date'>
        {ChatDate}
      </div>
    </Wrapper>
  );
};

export default DateBar;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  padding: 10px 0;

  .chat-date {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.xSmall};
    color : ${({ theme }) => theme.color.gray};

  }
  .chat-date::after {
    margin-left: 7px;
  }
  .chat-date::before {
    margin-right: 7px;
  }
  .chat-date::before,
  .chat-date::after {
    content: '';
    flex-grow: 1;
    background: ${({ theme }) => theme.color.gray};
    height: 0.5px;
  }
`;