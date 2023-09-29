import styled from 'styled-components';
import Check_icon from '@Assets/Icons/Chat/Check.svg';
import HeaderButtons from '@components/common/Buttons/HeaderButtons';

interface IChatListHeaderProps {
  deleteModeOn: boolean;
  setDeleteModeOn: React.Dispatch<React.SetStateAction<boolean>>;
  checkItems: Set<unknown>;
  deleteHandler: () => void;
}

const ChatListHeader = ({ deleteModeOn, setDeleteModeOn, checkItems, deleteHandler }: IChatListHeaderProps) => {
  return (
    <HeaderButtons>
      {!deleteModeOn ?
        <CheckButton 
        src={Check_icon}
        onClick={() => {setDeleteModeOn(prev => !prev); checkItems.clear()}} />
        :
        <DeleteButton
        $active={checkItems.size > 0}
        onClick={() => checkItems.size > 0 ? deleteHandler() : setDeleteModeOn(prev => !prev)}
        >삭제</DeleteButton>
      }
    </HeaderButtons>
  );
};

export default ChatListHeader;

const CheckButton = styled.img`
  cursor: pointer;
`;

const DeleteButton = styled.button<{$active : boolean}>`
  border: none;
  background-color: transparent;
  color : ${({ theme, $active }) => $active ? '#FF5B22' : theme.color.gray}; 
  font-size: ${({ theme }) => theme.font.size.base};
`;