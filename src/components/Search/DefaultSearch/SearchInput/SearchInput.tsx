import { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./SearchInputStyles";
import searchIcon from "@Assets/Icons/Search/Search_active.svg";

interface ISearchInputProps {
  onAddKeyword: (string: string) => void;
  defaultValue?: string;
}

const SearchInput = ({ onAddKeyword, defaultValue }: ISearchInputProps) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState<string>('');

  //* 상세 검색 페이지로 이동
  const searchFiltering = () => {
    navigate(`?searching=${search}&type=물물`);
    onAddKeyword(search);
    setSearch('');
  }

  //* input 입력
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  //* Click 검색
  const handleClick = () => {
    searchFiltering();
  }

  //* EnterKey로 검색
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (search && e.key === 'Enter') {
      // 엔터일때 부모의 onAddKeyword에 전달
      searchFiltering();
    }
  }

  //* 첫 rending시 input에 fucusing
  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
    if (defaultValue) setSearch(defaultValue);
  }, []);


  return (
    <form>
      <S.InputContainer>
        <S.Input
          type="text"
          placeholder="검색"
          value={search}
          onChange={handleSearch}
          onKeyPress={handleEnter}
          ref={inputRef}
          />
        <img src={searchIcon} onClick={handleClick} />
      </S.InputContainer>
    </form>
  );
};

export default SearchInput;