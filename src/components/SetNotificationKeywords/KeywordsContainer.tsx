import React from 'react';
import styled from 'styled-components';
import KeywordList from './KeywordList';
import TitleContainer from './TitleContainer';

const Container = styled.div`
  margin-top: 32px;
`;

const NoContent = styled.span`
  color: ${({ theme }) => theme.color.gray};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

interface IKeywordsContainerProps {
  keywords: { id: string; keyword: string }[];
  onRemove: (id: string) => void;
}

function KeywordsContainer({ keywords, onRemove }: IKeywordsContainerProps) {
  return (
    <Container>
      <TitleContainer count={keywords.length} />
      {keywords.length > 0 ? (
        <KeywordList keywords={keywords} onRemove={onRemove} />
      ) : (
        <NoContent>설정된 알림 키워드가 없습니다.</NoContent>
      )}
    </Container>
  );
}

export default KeywordsContainer;
