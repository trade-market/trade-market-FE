import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';

interface IChatTimerops {
  send: boolean;
  time: Date;
}

const ChatTime = ({ send, time }: IChatTimerops) => {
  const chatTime = moment(time).format('HH:mm')

  return (
    <ChatTimeBlock $send={send}>
      {chatTime}
    </ChatTimeBlock>
  );
};

export default ChatTime;

const ChatTimeBlock = styled.div<{ $send: boolean; }>`
  display: flex;
  position: relative;
  align-items: flex-end;
  padding: 2px 7px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.xSmall};
  color : ${({ theme }) => theme.color.gray};
  letter-spacing: 0.5px;
`;