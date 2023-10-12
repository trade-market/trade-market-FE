import { useState } from 'react';
import useQueryString from '@hooks/useQueryString';
import SearchHeader from "@components/Search/SearchFiltering/SearchHeader";
import styled from "styled-components";
import Menubar from '@components/Home/Exchange/ExchangeMenu/Menubar';

interface ISearchFilteringProps {
  handleAddKeyword: (text: string) => void;
}

const SearchFiltering = ({ handleAddKeyword }: ISearchFilteringProps) => {
  const [activeNav, setActiveNav] = useState(1);


  return (
    <Wrapper>
      <SearchHeader handleAddKeyword={handleAddKeyword} />
        <Menubar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        />
    </Wrapper>
  );
};

export default SearchFiltering;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gainsboro;
`;