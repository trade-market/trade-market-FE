import { useState } from 'react';
import useQueryString from '@hooks/useQueryString';
import DefaultSearch from './DefaultSearch';
import SearchFiltering from '@Pages/Search/SearchFiltering';

export interface keyInterface {
  id: number;
  text: string;
}

const Search = () => {
  const searching = useQueryString('searching');
  const [keywords, setKeywords] = useState<keyInterface[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]'),
  );


  //* 검색어 추가
  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    }
    //* 빈 키워드는 추가 할 수 없게 제어
    if (newKeyword.text !== "") {
      setKeywords([newKeyword, ...keywords]);
    }
  };

  return (
    <>
      {!searching ?
        <DefaultSearch
          keywords={keywords}
          setKeywords={setKeywords}
          handleAddKeyword={handleAddKeyword}
        /> 
        : <SearchFiltering handleAddKeyword={handleAddKeyword} />} 
    </>
  );
};

export default Search;