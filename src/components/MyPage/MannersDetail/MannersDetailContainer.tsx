import styled from 'styled-components';
import MannersDetailTitle from './MannersDetailTitle';
import MannersDetailItem from './MannersDetailItem';

const Container = styled.div`
  padding: 0 21px;
  &:last-child {
    margin-top: 20px;
  }
`;

interface IMannersDetailContainerProps {
  mannerType: string;
  data: { type: string; count: number; isBadManner: boolean }[];
}

function MannersDetailContainer({
  mannerType,
  data,
}: IMannersDetailContainerProps) {
  return (
    <Container>
      <MannersDetailTitle isBadManner={mannerType === '비매너'} />
      {data.map((item, index) => (
        <MannersDetailItem
          key={index}
          count={item.count}
          message={item.type}
          isBadManner={item.isBadManner}
        />
      ))}
    </Container>
  );
}

export default MannersDetailContainer;
