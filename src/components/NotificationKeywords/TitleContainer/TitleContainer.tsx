import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 4px;
  font-size: 16px;
  margin-bottom: 13px;
  .count {
    color: ${({ theme }) => theme.color.gray};
  }
`;

const Title = styled.h2`
  font-weight: 600;
`;

interface ITitleContainerProps {
  count: number;
}

function TitleContainer({ count }: ITitleContainerProps) {
  return (
    <Container>
      <Title>설정한 키워드</Title>
      <span className="count">({count}/10)</span>
    </Container>
  );
}

export default TitleContainer;
