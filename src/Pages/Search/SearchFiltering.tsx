import { useEffect, useState } from 'react';
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

interface FilterOptionType {
  sort_type: string;
  title: string;
  contents: string[];
}[];

interface ISearchFilteringProps {
  handleAddKeyword: (text: string) => void;
}

const SearchFiltering = ({ handleAddKeyword }: ISearchFilteringProps) => {
  const exchangeType = useQueryString('type');
  const [activeNav, setActiveNav] = useState(1);
  const { isOpen, open, close } = useModal();
  const [isFilter, setIsFilter] = useState({
    exchangType: exchangeType,
    distance: '',
    exchangForm: '',
    category: '',
    sort: ''
  });

  const renderModal = (title: string, list: string[], i: number) => (
    <BottomUpModal key={i} close={close} titleText={title}>
      <ModalSelect list={list} />
    </BottomUpModal>
  );

  const renderFilteringComponent = (filter: FilterOptionType, i: number) => {
    switch (filter.sort_type) {
      case 'distance': 
        return (
          <></>
        );
      case 'category': 
        return (
          <></>
        );
      default:
        return (
          renderModal(filter.title, filter.contents, i)
        )
    }
  };
  
  useEffect(() => {
    const option = exchangeType === 'object' ? 0 : 1;
    FilteringOptions[2].contents.splice(0,  FilteringOptions[2].contents.length, ...ExchangeOptions[option].contents)
  }, [exchangeType]);

  return (
    <>
      <SearchHeader handleAddKeyword={handleAddKeyword} />
      <Menubar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <FilterTag open={open} />
      <Container>
        {Data.map((post) => {
          return (
            <PostContainer>
              <PostComponent post={post} />
            </PostContainer>
          );
        })}
      </Container>
      {isOpen && (
        FilteringOptions.map((filter, i) => (
          renderFilteringComponent(filter, i)
        ))
      )}
    </>
    
  );
};

export default SearchFiltering;

const Container = styled.div`
  padding : 10px 20px 0 20px;
`;
