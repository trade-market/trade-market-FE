import { useState, useRef, useLayoutEffect } from 'react';
import * as S from "./SearchInputStyles";
import searchIcon from "@Assets/Icons/Search/Search_active.svg";

interface ISearchInputProps {
  onAddKeyword: (string: string) => void
}

const SearchInput = ({ onAddKeyword }: ISearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState<string>('');

  //* input 입력
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  //* enter 감지
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //엔터일때 부모의 addkeyword에 전달
    if (search && e.key === 'Enter') {
      onAddKeyword(search);
      setSearch('');
    }
  }
  
  //* input에 fucusing
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
          onKeyDown={handleEnter}
          ref={inputRef}
          />
        <img src={searchIcon}/>
      </S.InputContainer>

  );
};

export default SearchInput;