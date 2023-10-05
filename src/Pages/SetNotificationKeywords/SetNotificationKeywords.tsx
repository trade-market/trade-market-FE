import { useState } from 'react';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import InputContainer from '@components/SetNotificationKeywords/InputContainer';
import KeywordsContainer from '@components/SetNotificationKeywords/KeywordsContainer';

const Container = styled.div`
  padding: 0 21px;
  padding-top: 60px;
`;

function SetNotificationKeywords() {
  // Todo: API 명세서 확인 후 API 연결. 임시 데이터임
  const [keywords, setKeywords] = useState([
    { id: '1', keyword: '아이패드' },
    { id: '2', keyword: '맥북' },
  ]);

  const handleAddKeyword = (keyword: string) => {
    if (keyword === '') return;

    setKeywords((keywords) => [
      ...keywords,
      { id: String(Date.now()), keyword },
    ]);
  };

  const handleDeleteKeyword = (id: string) => {
    setKeywords((keywords) => keywords.filter((keyword) => keyword.id !== id));
  };

  return (
    <>
      <CommonHeader>알림 키워드 설정</CommonHeader>
      <Container>
        <InputContainer
          onAdd={handleAddKeyword}
          currentKeywordCount={keywords.length}
        />
        <KeywordsContainer keywords={keywords} onRemove={handleDeleteKeyword} />
      </Container>
    </>
  );
}

export default SetNotificationKeywords;
