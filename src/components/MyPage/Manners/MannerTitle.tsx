import styled from 'styled-components';
import arrowRight from '@Assets/Icons/arrow_right.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  .arrow-right {
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: 600;
`;

interface IMannerTitleProps {
  text: string;
}

function MannerTitle({ text }: IMannerTitleProps) {
  return (
    <Container>
      <Title>{text}</Title>
      <img className="arrow-right" src={arrowRight} alt="arrow-right" />
    </Container>
  );
}

export default MannerTitle;
