import Check_icon from '@Assets/Icons/Chat/Check.svg';
import styled from 'styled-components';

interface IChatListHeaderProps {
  deleteModeOn: boolean;
  setDeleteModeOn: React.Dispatch<React.SetStateAction<boolean>>;
  checkItems: Set<unknown>;
  deleteHandler: () => void;
}

const ChatListHeader = ({ deleteModeOn, setDeleteModeOn, checkItems, deleteHandler }: IChatListHeaderProps) => {
  return (
    <>
      {!deleteModeOn ?
        <img 
        className='check' src={Check_icon}
        onClick={() => { setDeleteModeOn(prev => !prev); checkItems.clear()}} />
        :
        <DeleteButton
        $active={checkItems.size > 0}
        onClick={() => checkItems.size > 0 ? deleteHandler() : setDeleteModeOn(prev => !prev)}
        >삭제</DeleteButton>
      }
    </>
  );
};

export default ChatListHeader;

const DeleteButton = styled.button<{$active : boolean}>`
  border: none;
  margin-left: -13px;
  background-color: transparent;
  color : ${({ theme, $active }) => $active ? '#FF5B22' : theme.color.gray}; 
  font-size: ${({ theme }) => theme.font.size.base};
`;