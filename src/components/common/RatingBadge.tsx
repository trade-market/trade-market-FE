import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 3px;
  background-color: ${({ theme }) => theme.color.Mainblue};
  color: ${({ theme }) => theme.color.white};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  border-radius: 2px 2px 0px 0px;
`;

interface IRatingBadgeProps {
  rating: number;
}

function RatingBadge({ rating }: IRatingBadgeProps) {
  return <Container>{rating}</Container>;
}

export default RatingBadge;
