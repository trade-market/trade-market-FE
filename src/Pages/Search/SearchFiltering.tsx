import { useState } from 'react';
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

interface ISearchFilteringProps {
  handleAddKeyword: (text: string) => void;
}

const SearchFiltering = ({ handleAddKeyword }: ISearchFilteringProps) => {
  const [activeNav, setActiveNav] = useState(1);
  const [isFilter, setIsFilter] = useState([]);
  const { isOpen, open, close } = useModal();

  // const handleCheckList = (e, content, idx, sort_type) => {
  //   e.target.checked
  //     ? setIsFilter([
  //         ...isFilter,
  //         { id: idx, content, sortType: sort_type },
  //       ])
  //     : setIsFilter(
  //         isFilter.filter(list => list.content !== content)
  //       );
  // }

  return (
    <>
      <SearchHeader handleAddKeyword={handleAddKeyword} />
      <Menubar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <FilterTag open={open}/>
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
        <BottomUpModal close={close} titleText={'거래 형식'}>
          <ModalSelect />
        </BottomUpModal>
      )}
    </>
    
  );
};

export default SearchFiltering;

const Container = styled.div`
  padding : 10px 20px 0 20px;
`;
