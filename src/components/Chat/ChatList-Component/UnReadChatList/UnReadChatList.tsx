import styled from 'styled-components';

interface IUnReadChatlistActiveProps {
  unreadNumber: number;
  deleteMode: boolean;
}

const UnReadChatList = ({
  unreadNumber,
  deleteMode,
}: IUnReadChatlistActiveProps) => {
  return (
    <>
      {!deleteMode && (
        <UnreadChatActiveButton>{unreadNumber}</UnreadChatActiveButton>
      )}
    </>
  );
};

export default UnReadChatList;

const UnreadChatActiveButton = styled.div`
  display: flex;
  width: 30px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.white};
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.small};
`;
