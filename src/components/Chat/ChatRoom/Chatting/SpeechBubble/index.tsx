import styled from 'styled-components';

interface IInfoCollapseProps {
  message: string;
  send: boolean;
}

const SpeechBubble = ({ message, send } : IInfoCollapseProps) => {
  return (
      <Container $send={send}>
        <div className="bubble">
          {message}
        </div>
      </Container>
  );
};

export default SpeechBubble;

const Container = styled.div<{ $send: boolean; }>`
  display: flex;
  justify-content: ${({ $send }) => $send ? 'flex-end' : 'flex-start'};
  position: relative;
  width: 100%;
  padding-top: 25px;

  .bubble {
    display: flex;
    position: absolute;
    min-height: 83px;
    min-width: 204px;
    padding: 12px 15px;
    white-space: pre-wrap;
    word-break: break-all;
    border-radius: 5px;
    position: relative;
    font-size: ${({ theme }) => theme.font.size.small};
    background-color: ${({ theme }) => theme.color.lightBlue};
    color : ${({ theme }) => theme.color.lightGray};
  }

  .bubble::before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 4px solid ${({ theme,  $send }) => $send ? theme.color.lightBlue : 'transparent' };
    border-right: 4px solid ${({ theme,  $send }) => $send ? 'transparent' : theme.color.lightBlue };
    border-top: 4px solid ${({ theme, $send }) =>  $send ? theme.color.lightBlue : theme.color.lightBlue };
    border-bottom: 4px solid transparent;
    border-radius: 1px;
    top: -1px;
    right:${({ $send }) =>  $send ? '-6px' : null };
    left:${({ $send }) =>  $send ? null : '-6px' };
    transform: ${({ $send }) => $send ? 'rotate(-15deg)' : 'rotate(15deg)' };
  }
`; 

