import ChatListItem from '@components/Chat/ChatList/ChatListItem';

interface IChatDataProps {
  nickname: string;
  time: string;
  text: string;
  userImage: string;
}

interface IChatListsProps {
  ChatListData: IChatDataProps[];
  deleteModeOn: boolean;
  checkHandler: (id: string, isChecked: boolean) => void;
  checkItems: Set<unknown>;
}

const ChatLists = ({ChatListData, deleteModeOn, checkHandler, checkItems}:IChatListsProps) => {
  return (
    <>
      {ChatListData.map((chat, i)=> (
        <ChatListItem
          key={i}
          id={`user${i.toString()}`}
          nickName={chat.nickname}
          time={chat.time}
          text={chat.text}
          userImg={chat.userImage}
          deleteMode={deleteModeOn}
          checkHandler={checkHandler}
          checkItems={checkItems}
          />
      ))}
    </>
  );
};

export default ChatLists;