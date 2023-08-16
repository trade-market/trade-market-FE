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

  //* 클릭하여 검색
  const handleClick = () => {
    onAddKeyword(search);
    setSearch('');
  }

  //* enterKey로 검색
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (search && e.key === 'Enter') {
      //엔터일때 부모의 onAddKeyword에 전달
      onAddKeyword(search)
      setSearch('')
    }
  }

  //* 첫 rending시 input에 fucusing
  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  });

  return (
    <form>
      <S.InputContainer>
        <S.Input
          type="text"
          placeholder="검색"
          value={search}
          onChange={handleSearch}
          onKeyUp={handleEnter}
          ref={inputRef}
          />
        <img src={searchIcon} onClick={handleClick}/>
      </S.InputContainer>
    </form>
  );
};

export default SearchInput;