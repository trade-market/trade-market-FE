import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const exchangeType = useQueryString('type');
  const searching = useQueryString('searching');
  const [activeNav, setActiveNav] = useState(1);
  const { isOpen, open, close } = useModal();
  const [isFilter, setIsFilter] = useState([
    { sortType: 'searching', filtering: searching },
    { sortType: 'type', filtering: exchangeType },
  ]);

  const makeQueryString = () => {
    const queryString = isFilter
      .map(({ filtering, sortType }) => `${sortType}=${filtering}`)
      .map((item, idx) => {
        return idx === 0 ? item : '&' + item;
      })
      .join('');
    
    navigate(`?${queryString}`);
    close();
  };
    
  const handleCheckList = useCallback((select: string, sort_type: string) => {
    let flag = !isFilter.map((x) => x.sortType).includes(sort_type);
    if (flag)setIsFilter([...isFilter, { sortType: sort_type, filtering: select }])
  },[]);

  const renderModal = (filter: FilterOptionType, i: number) => (
    <BottomUpModal key={i} close={close} titleText={filter.title} makeQueryString={makeQueryString}>
      <ModalSelect filter={filter} handleCheckList={handleCheckList} />
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
          renderModal(filter, i)
        )
    }
  };
  
  useEffect(() => {
    const option = exchangeType === 'object' ? 0 : 1;
    FilteringOptions[2].contents.splice(0,  FilteringOptions[2].contents.length, ...ExchangeOptions[option].contents)
  }, [exchangeType]);


  // console.log('isFilter', isFilter)

  return (
    <>
      <SearchHeader handleAddKeyword={handleAddKeyword} />
      <Menubar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
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
