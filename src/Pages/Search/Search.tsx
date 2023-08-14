import * as S from "./SearchStyles";
import RecentSearsh from "@/components/Search/RecentSearch/RecentSearch";
import NeighborhoodSearch from "@/components/Search/NeighborhoodSearch/NeighborhoodSearch";
import SearchInput from "@/components/Search/SearchInput/SearchInput";

const Search = () => {

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