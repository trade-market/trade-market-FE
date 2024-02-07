import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SearchInputStyles';
import searchIcon from '@Assets/Icons/Search/Search_active.svg';

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
    onAddKeyword(search);
    navigate(`?searching=${search}&type=물물`);
  };

  //* input 입력
  const SearchHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearch(e.target.value);
    },
    []
  );

  //* Click 검색
  const ClickHandler = () => {
    searchFiltering();
  };

  //* EnterKey로 검색
  const EnterkHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      searchFiltering(); // 엔터일때 부모의 onAddKeyword에 전달
    }
  };

  //* 첫 rending시 input에 fucusing
  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current!.focus();
    if (defaultValue) setSearch(defaultValue);
  }, []);

  return (
    <S.InputContainer>
      <S.Input
        type="text"
        placeholder="검색"
        value={search}
        onChange={SearchHandler}
        onKeyPress={EnterkHandler}
        ref={inputRef}
      />
      <img src={searchIcon} onClick={ClickHandler} />
    </S.InputContainer>
  );
};

export default SearchInput;
