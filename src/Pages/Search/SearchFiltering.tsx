import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useQueryString from '@hooks/useQueryString';
import SearchHeader from "@components/Search/SearchFiltering/SearchHeader";
import styled from "styled-components";
import Menubar from '@components/Home/Exchange/ExchangeMenu/Menubar';
import { PostContainer } from '@components/Home/OurTownPost/OurTownPostStyles';
import PostComponent from '@components/Home/OurTownPost/PostComponents/PostComponent';
import { Data } from '@components/Home/OurTownPost/DumyData';
import FilterTag from '@components/Search/SearchFiltering/FilterTag';
import useModal from '@hooks/useModal';
import BottomUpModal from "@components/Search/SearchFiltering/BottomUpModal/BottomUpModal";
import ModalSelect from '@components/Search/SearchFiltering/BottomUpModal/ModalSelect';
import FilteringOptions from '@/Options/FilteringOptions';
import ExchangeOptions from "@/Options/ExchangeOptions";
import FilterOptionType from "@/types/FilterTypes";

interface ISearchFilteringProps {
  handleAddKeyword: (text: string) => void;
}

const SearchFiltering = ({ handleAddKeyword }: ISearchFilteringProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const exchangeType = useQueryString('type');
  const [selectFilter, setSelectFilter] = useState<string[]>([]);
  const [activeNav, setActiveNav] = useState(1);
  const { isOpen, open, close } = useModal();
    
  const Filteringhandler = () => {
    const [queryType, select] = selectFilter;
    searchParams.set(queryType, select);
    setSearchParams(searchParams);
    setSelectFilter([]);
    close();
  };

  const renderModal = (filter: FilterOptionType, i: number) => (
    <BottomUpModal key={i} close={close} titleText={filter.title} Filteringhandler={Filteringhandler}>
      <ModalSelect filter={filter} setSelectFilter={setSelectFilter} />
    </BottomUpModal>
  );

  const renderFilteringComponent = (filter: FilterOptionType, i: number) => {
    switch (i) {
      case 0: 
        return (
          <></>
        );
      case 1: 
        return (
          renderModal(FilteringOptions[i], i)
        );
      case 2: 
        return (
          <></>
        );
      default:
        return (
          renderModal(FilteringOptions[i], i)
        )
    }
  };
  
  useEffect(() => {
    const option = exchangeType === 'object' ? 0 : 1;
    FilteringOptions[2].contents.splice(0,  FilteringOptions[2].contents.length, ...ExchangeOptions[option].contents)
  }, [exchangeType]);

  useEffect(() => {
    if (selectFilter[0] === 'type') Filteringhandler(); // 메뉴바 클릭시 쿼리스트링 동기화
  }, [selectFilter])

  return (
    <>
      <SearchHeader handleAddKeyword={handleAddKeyword} />
      <Menubar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        setSelectFilter={setSelectFilter}
      />
      <FilterTag open={open} />
      <Container>
        {Data.map((post, i) => {
          return (
            <PostContainer key={i}>
              <PostComponent post={post} />
            </PostContainer>
          );
        })}
      </Container>
      {isOpen && (
        FilteringOptions.map(renderFilteringComponent)
      )}
    </>
  );
};

export default SearchFiltering;

const Container = styled.div`
  padding : 10px 20px 0 20px;
`;
