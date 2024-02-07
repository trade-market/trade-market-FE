import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: 600;
`;

interface IBigTitleProps {
  children: React.ReactNode;
}

function BigTitle({ children }: IBigTitleProps) {
  return <Title>{children}</Title>;
}

export default BigTitle;
