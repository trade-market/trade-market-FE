import { OfferPostTypes } from '@/types/OfferTypes';
import styled from 'styled-components';
import ChatToOfferedUserItem from './ChatToOfferedUserItem';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;

interface IChatToOfferedUserListProps {
  offers: OfferPostTypes[];
}
function ChatToOfferedUserList({ offers }: IChatToOfferedUserListProps) {
  return (
    <Ul>
      {offers.map((offer) => (
        <ChatToOfferedUserItem
          key={offer.id}
          userId={offer.userId}
          profileImg={offer.profileImg}
          nickname={offer.nickname}
          location={offer.location}
          rating={offer.rating}
        />
      ))}
    </Ul>
  );
}

export default ChatToOfferedUserList;
