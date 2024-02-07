import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 21px;
  margin-top: 77px;
`;

interface IContentsSectionProps {
  children: React.ReactNode;
}

function ContentsSection({ children }: IContentsSectionProps) {
  return <Container>{children}</Container>;
}

export default ContentsSection;
