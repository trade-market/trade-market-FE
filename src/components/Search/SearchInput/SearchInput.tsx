import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import * as S from "./SearchInputStyles";
import searchIcon from "@Assets/Icons/Search/Search_active.svg";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState<string>('');
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  
  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  });

  return (
    <S.InputContainer>
      <S.Input
        type="text"
        placeholder="검색"
        value={search}
        onChange={handleSearch}
        ref={inputRef}
      />
      <img src={searchIcon}/>
    </S.InputContainer>
  );
};

export default SearchInput;