import styled from 'styled-components';
import { size } from '../../../styles/theme';
import GobackBtn from '@components/common/CommonHeader/GobackBtn';
import SearchInput from "@components/Search/DefaultSearch/SearchInput/SearchInput";
import useQueryString from '@hooks/useQueryString';

interface ISearchHeaderProps {
  handleAddKeyword: (text: string) => void;
}

const SearchHeader = ({ handleAddKeyword }: ISearchHeaderProps) => {
  const searching = useQueryString('searching');
  return (
    <Container>
      <GobackBtn />
      <InputContainer>
        <SearchInput onAddKeyword={handleAddKeyword} defaultValue={searching} />
      </InputContainer>
    </Container>
  );
};

export default SearchHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size.mobile};
  min-height: 60px;
  z-index: 2;
  /* position: fixed; */
  top: 0;
  background-color: ${({ theme }) => theme.color.bgColor};
  padding: 10px 0px 0px 15px;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-right: 7px;
`;