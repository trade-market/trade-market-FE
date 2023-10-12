import SearchInput from "@components/Search/DefaultSearch/SearchInput/SearchInput";
import useQueryString from '@hooks/useQueryString';

interface IDefaultSearchProps {
  handleAddKeyword: (text: string) => void;
}

const SearchFiltering = ({handleAddKeyword}: IDefaultSearchProps) => {
  const searching = useQueryString('searching');
  console.log(searching)

  return (
    <div>
      <SearchInput onAddKeyword={handleAddKeyword} />
      SearchFiltering
    </div>
  );
};

export default SearchFiltering;