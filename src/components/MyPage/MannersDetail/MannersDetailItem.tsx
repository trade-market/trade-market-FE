import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.whiteGray};
  }

  .count {
    color: ${({ theme }) => theme.color.Mainblue};
    font-weight: 600;
  }

  .bad {
    color: ${({ theme }) => theme.color.orange};
  }
`;

interface IMannersDetailItemProps {
  count: number;
  message: string;
  isBadManner: boolean;
}

function MannersDetailItem({
  count,
  message,
  isBadManner,
}: IMannersDetailItemProps) {
  return (
    <Container>
      <div className="message">{message}</div>
      <div className={`count ${isBadManner ? 'bad' : ''}`}>{count}</div>
    </Container>
  );
}

export default MannersDetailItem;
