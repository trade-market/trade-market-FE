import styled from 'styled-components';

const ExchangeInfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 92px;
  height: 80px;
  border-radius: 4px;
  background-color: #fdfdfd;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  .title {
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: 500;
    color: ${({ theme }) => theme.color.lightGray};
  }

  .count {
    color: ${({ theme }) => theme.color.Mainblue};
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.medium};
  }
`;

interface IExchangeInfoBoxProps {
  title: string;
  count: number;
}

function ExchangeInfoBox({ title, count }: IExchangeInfoBoxProps) {
  return (
    <ExchangeInfoBoxContainer>
      <div className="title">{title}</div>
      <div className="count">{count}</div>
    </ExchangeInfoBoxContainer>
  );
}

export default ExchangeInfoBox;
