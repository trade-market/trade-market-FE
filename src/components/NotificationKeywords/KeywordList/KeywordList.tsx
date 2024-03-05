import React from 'react';
import styled from 'styled-components';
import KeywordItem from '../KeywordItem/KeywordItem';

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 8px;
`;

interface IKeywordListProps {
  keywords: { id: string; keyword: string }[];
  onRemove: (id: string) => void;
}

function KeywordList({ keywords, onRemove }: IKeywordListProps) {
  return (
    <Container>
      {keywords.map(({ id, keyword }) => (
        <KeywordItem key={id} id={id} keyword={keyword} onRemove={onRemove} />
      ))}
    </Container>
  );
}

export default KeywordList;
