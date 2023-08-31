import styled from 'styled-components';
import OfferItem from '@components/Articles/OfferItem';
import { OfferPostTypes } from '@/types/OfferTypes';

interface IOfferItemListsProps {
  offers: OfferPostTypes[];
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
