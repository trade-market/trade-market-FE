import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useQueryString from '@hooks/useQueryString';
import SearchHeader from '@components/Search/SearchFiltering/SearchHeader';
import Menubar from '@components/Home/Exchange/ExchangeMenu/Menubar';
import FilterTag from '@components/Search/SearchFiltering/FilterTag';
import SearchPosts from '@components/Search/SearchFiltering/SearchPosts';
import useModal from '@hooks/useModal';
import BottomUpModal from '@components/Search/SearchFiltering/BottomUpModal/BottomUpModal';
import ModalSelect from '@components/Search/SearchFiltering/BottomUpModal/ModalSelect';
import ModalCheckbox from '@components/Search/SearchFiltering/BottomUpModal/ModalCheckbox';
import DistanceRangeBar from '@components/Search/SearchFiltering/BottomUpModal/DistanceRangeBar';
import ExchangeOptions from '@/Options/ExchangeOptions';
import FilteringOptions from '@/Options/FilteringOptions';

interface ISearchFilteringProps {
  handleAddKeyword: (text: string) => void;
}

const SearchFiltering = ({ handleAddKeyword }: ISearchFilteringProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const exchangeType = useQueryString('type');
  const [selectFilter, setSelectFilter] = useState<string[]>([]); //선택한 필터 key & value
  const [activeNav, setActiveNav] = useState(0); // 메뉴바
  const [filterNumber, setFilterNumber] = useState(0); // 선택한 key Number
  const { isOpen, open, close } = useModal();
  const [searchPosts, setSearchPosts] = useState([]); // 가져온 게시물

  //* 필터 API로 게시물 정보 get
  const getSearchPostData = useCallback(async () => {
    //Todo : 서버 주소 연결
    const BASE_URL = `http://localhost:5173/`;
    const res = await fetch(`${BASE_URL}/search/${searchParams}`);
    // const data = await res.json();
    // setSearchPosts(data.result);
  }, [searchParams]);

  const AddQueryStringHandler = () => {
    //* 쿼리스트링 추가
    const [queryType, select] = selectFilter;
    searchParams.set(queryType, select);
    setSearchParams(searchParams);
    setSelectFilter([]);
    close();
  };

  const FilteringMadalRandering = () => {
    //* 모달 render
    const { sort_type, title, contents } = FilteringOptions[filterNumber];
    const ModalType =
      filterNumber === 0
        ? DistanceRangeBar
        : filterNumber === 2
        ? ModalCheckbox
        : ModalSelect;
    return (
      <BottomUpModal
        key={filterNumber}
        filterNumber={filterNumber}
        close={close}
        titleText={filterNumber === 0 ? '지역 범위' : title}
        AddQueryStringHandler={AddQueryStringHandler}
      >
        <ModalType
          sort_type={sort_type}
          contents={contents}
          setSelectFilter={setSelectFilter}
        />
      </BottomUpModal>
    );
  };

  useEffect(() => {
    getSearchPostData();
  }, [getSearchPostData]);

  useEffect(() => {
    //* 물물/재능 바뀔 시 카테고리 contents 배열 변화
    const option = exchangeType === '물물' ? 0 : 1;
    FilteringOptions[2].contents.splice(
      0,
      FilteringOptions[2].contents.length,
      ...ExchangeOptions[option].contents
    );
  }, [exchangeType]);

  useEffect(() => {
    //* 메뉴바 클릭시 카테고리 초기화
    if (selectFilter[0] === 'type') {
      AddQueryStringHandler(); // type 쿼리스트링 반영
      for (const [key] of searchParams.entries()) {
        if (key === 'category') {
          searchParams.delete(key);
          setSearchParams(searchParams);
        }
      }
    }
  }, [selectFilter]);

  return (
    <>
      <SearchHeader handleAddKeyword={handleAddKeyword} />
      <Menubar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        setSelectFilter={setSelectFilter}
      />
      <FilterTag open={open} setFilterNumber={setFilterNumber} />
      <SearchPosts />
      {isOpen && FilteringMadalRandering()}
    </>
  );
};

export default SearchFiltering;
