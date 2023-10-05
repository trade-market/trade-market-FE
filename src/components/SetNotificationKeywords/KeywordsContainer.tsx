import styled from 'styled-components';
import KeywordItem from './KeywordItem';

const Container = styled.div`
  margin-top: 32px;
`;

const TitleContainer = styled.div`
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

const KeywordList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 8px;
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
      <TitleContainer>
        <Title>설정한 키워드</Title>
        <span className="count">({keywords.length}/10)</span>
      </TitleContainer>
      {keywords.length > 0 ? (
        <KeywordList>
          {keywords.map(({ id, keyword }) => (
            <KeywordItem
              key={id}
              id={id}
              keyword={keyword}
              onRemove={onRemove}
            />
          ))}
        </KeywordList>
      ) : (
        <NoContent>설정된 알림 키워드가 없습니다.</NoContent>
      )}
    </Container>
  );
}

export default KeywordsContainer;
