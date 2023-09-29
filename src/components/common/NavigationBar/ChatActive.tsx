import styled from 'styled-components';

interface IChatActiveProps {

}

const ChatActive = ({}: IChatActiveProps) => {
  return (
    <Wrapper>
      <ChatActiveButton className='ChatActiveButton'/>
    </Wrapper>
  );
};

export default ChatActive;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-left: 6px;
`;

const ChatActiveButton = styled.div`
  position: absolute; 
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.orange};
`;