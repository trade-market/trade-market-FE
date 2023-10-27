import { useEffect, useLayoutEffect } from 'react';
import styled from "styled-components";
import RecentSearsh from "@components/Search/DefaultSearch/RecentSearch/RecentSearch";
import NeighborhoodSearch from "@components/Search/DefaultSearch/NeighborhoodSearch/NeighborhoodSearch";
import SearchInput from "@components/Search/DefaultSearch/SearchInput/SearchInput";
import WriteButton from '@components/Home/WriteButton';
import { keyInterface } from '@Pages/Search/Search'

interface IDefaultSearchProps {
  keywords: keyInterface[];
  setKeywords: React.Dispatch<React.SetStateAction<keyInterface[]>>;
  handleAddKeyword: (text: string) => void;
}

const DefaultSearch = ({keywords, setKeywords, handleAddKeyword}: IDefaultSearchProps) => {
  //* 1. keywords가 변경될 경우 새롭게 localStroage의 아이템 'keywords'를 세팅한다.
  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords]);

  //* 단일 검색어 삭제
  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((keyword) => keyword.id != id);
    setKeywords(nextKeyword);
  };

  //* 검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([]);
  }

  //* 2. 최근 검색어는 최대 5개씩만 노출 되도록 한다.
  useLayoutEffect(() => {
    if (keywords.length > 5) {
      setKeywords(keywords.slice(0, 5))
    };
  }, [keywords]);

  return (
    <Wrapper>
      <SearchInput onAddKeyword={handleAddKeyword} />
      <RecentSearsh
        keywords={keywords}
        onClearKeywords={handleClearKeywords}
        onRemoveKeyword={handleRemoveKeyword}
        />
      <Line />
      <NeighborhoodSearch />
      <WriteButton />
    </Wrapper>
  );
};

export default DefaultSearch;

const Wrapper = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Line = styled.div`
  border-bottom: 1.5px solid ${({ theme }) => theme.color.whiteGray};
`