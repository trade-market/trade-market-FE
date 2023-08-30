import styled from 'styled-components';
import OfferItem from '@components/Articles/OfferItem';

export interface OfferTypes {
  profileImg: string;
  nickname: string;
  location: string;
  rating: string;
  title: string;
  category: string;
  price: string;
  createdAt: Date | string;
  text: string;
  isOriginalPost: boolean;
}

interface IOfferItemListsProps {
  offers: OfferTypes[];
}

const Ul = styled.ul``;

const Container = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

function OfferItemLists({ offers }: IOfferItemListsProps) {
  return (
    <Ul>
      {offers.map((offers, i) => (
        <Container key={i}>
          <OfferItem {...offers} />
        </Container>
      ))}
    </Ul>
  );
}

export default OfferItemLists;
