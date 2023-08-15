import { useState, useEffect } from 'react';
import * as S from "./SearchStyles";
import RecentSearsh from "@/components/Search/RecentSearch/RecentSearch";
import NeighborhoodSearch from "@/components/Search/NeighborhoodSearch/NeighborhoodSearch";
import SearchInput from "@/components/Search/SearchInput/SearchInput";

interface keyInterface {
  id: number
  text: string
}

const Search = () => {
  const [keywords, setKeywords] = useState<keyInterface[]>([]);

  //* 1. window, 브라우저가 모두 렌더링된 상태에서 해당 함수를 실행할 수 있도록 한다.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords') || '[]'
      setKeywords(JSON.parse(result))
    }
  }, [])

  //* 2. keywords가 변경될 경우 새롭게 localStroage의 아이템 'keywords'를 세팅한다.
  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  //* 검색어 추가
  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    }
    setKeywords([newKeyword, ...keywords]);
    // setKeywords(keywords.unshift(newKeyword))
  }

  //* 단일 검색어 삭제
  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((keyword) => {
      return keyword.id != id;
    })
    setKeywords(nextKeyword);
  }

  //* 검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([]);
  }

  return (
    <S.Wrapper>
      <SearchInput onAddKeyword={handleAddKeyword} />
      <RecentSearsh
        keywords={keywords}
        onClearKeywords={handleClearKeywords}
        onRemoveKeyword={handleRemoveKeyword}
      />
      <S.Line />
      <NeighborhoodSearch />
    </S.Wrapper>
  );
};

export default Search;