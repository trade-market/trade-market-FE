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
}

function OfferItemLists({ offers }: IOfferItemListsProps) {
  return (
    <Ul>
      {offers.map((offers) => (
        <Container key={offers.id}>
          <OfferItem {...offers} />
        </Container>
      ))}
    </Ul>
  );
}

export default OfferItemLists;
