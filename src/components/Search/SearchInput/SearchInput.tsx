import * as S from "./SearchInputStyles";

const SearchInput = () => {
  return (
    <S.InputContainer>
      <S.Input
        type="text"
        placeholder="검색"
      />
    </S.InputContainer>
  );
};

export default SearchInput;