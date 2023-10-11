import styled from 'styled-components';
import OfferItem from '@components/Articles/OfferItem';
import { OfferPostTypes } from '@/types/OfferTypes';

const Ul = styled.ul``;

const Container = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

interface IOfferItemListsProps {
  offers: OfferPostTypes[];
  isOwner: boolean;
}

function OfferItemLists({ offers, isOwner }: IOfferItemListsProps) {
  return (
    <Ul>
      {offers.map((offers) => (
        <Container key={offers.id}>
          <OfferItem {...offers} isOwner={isOwner} />
        </Container>
      ))}
    </Ul>
  );
}

export default OfferItemLists;
