import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import * as S from "./SearchStyles";
import RecentSearsh from "@/components/Search/RecentSearch/RecentSearch";
import NeighborhoodSearch from "@/components/Search/NeighborhoodSearch/NeighborhoodSearch";
import SearchInput from "@/components/Search/SearchInput/SearchInput";

const Search = () => {
    const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
    );

  // const handleAddKeyword = (text) => {
  //   const newKeyword = text;
  //   setKeywords[...newKeyword, ...keywords];
  // }

  //keyword에 변화가 일어날때만 랜더링
  useEffect(() => {
    const keyword = JSON.stringify(keywords);
    localStorage.setItem('keywords', JSON.stringify(keyword))
  }, [keywords]);

  return (
    <S.Wrapper>
      <SearchInput />
      <RecentSearsh />
      <S.Line />
      <NeighborhoodSearch />
    </S.Wrapper>
  );
};

export default Search;