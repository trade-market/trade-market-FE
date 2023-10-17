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
import ModalCheckbox from '@components/Search/SearchFiltering/BottomUpModal/ModalCheckbox';
import DistanceRangeBar from '@components/Search/SearchFiltering/DistanceRangeBar';

interface ISearchFilteringProps {
  handleAddKeyword: (text: string) => void;
}

const SearchFiltering = ({ handleAddKeyword }: ISearchFilteringProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const exchangeType = useQueryString('type');
  const [selectFilter, setSelectFilter] = useState<string[]>([]);
  const [activeNav, setActiveNav] = useState(0);
  const [filterNumber, setFilterNumber] = useState(0);
  const { isOpen, open, close } = useModal();
    
  const AddQueryStringHandler = () => { //* 쿼리스트링 추가
    const [queryType, select] = selectFilter;
    searchParams.set(queryType, select);
    setSearchParams(searchParams);
    setSelectFilter([]);
    close();
  };

  const FilteringMadalRandering = () => { //* 모달 render
    const { sort_type, title, contents } = FilteringOptions[filterNumber];
    const ModalType = filterNumber === 0 ? DistanceRangeBar : filterNumber === 2 ? ModalCheckbox : ModalSelect;
    // const ModalType = filterNumber === 2 ? ModalCheckbox : ModalSelect;
    return(
      <BottomUpModal key={filterNumber} filterNumber={filterNumber} close={close} titleText={filterNumber === 0 ? '지역 범위' :title} AddQueryStringHandler={AddQueryStringHandler}>
        <ModalType sort_type={sort_type} contents={contents} setSelectFilter={setSelectFilter} />
      </BottomUpModal>
    )
  }
  
  useEffect(() => { //* 물물/재능 바뀔 시 카테고리 contents 배열 변화
    const option = exchangeType === '물물' ? 0 : 1;
    FilteringOptions[2].contents.splice(0,  FilteringOptions[2].contents.length, ...ExchangeOptions[option].contents)
  }, [exchangeType]);

  useEffect(() => {
    if (selectFilter[0] === 'type') AddQueryStringHandler(); //* 메뉴바 클릭시 쿼리스트링 동기화
  }, [selectFilter])

  return (
    <>
      <SearchHeader handleAddKeyword={handleAddKeyword} />
      <Menubar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        setSelectFilter={setSelectFilter}
      />
      <FilterTag open={open} setFilterNumber={setFilterNumber} />
      <Container>
        {Data.map((post, i) => {
          return (
            <PostContainer key={i}>
              <PostComponent post={post} />
            </PostContainer>
          );
        })}
      </Container>
      {isOpen && FilteringMadalRandering()}
    </>
  );
};

export default SearchFiltering;

const Container = styled.div`
  padding : 10px 20px 0 20px;
`;