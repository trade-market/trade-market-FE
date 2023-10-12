import styled from "styled-components";
import optionDown from '@Assets/Icons/Search/optionDown.svg';
import FilteringOptions from '@/Options/FilteringOptions';

interface IFilterTagProps {
  open: () => void;
}

const FilterTag = ({open}: IFilterTagProps) => {
  return (
    <Wrapper>
      {FilteringOptions.map((option, idx) => (
        <Tag key={idx} onClick={open}>
          {option.title}
          <img src={optionDown} />
        </Tag>
      ))}
    </Wrapper>
  );
};

export default FilterTag;

const Wrapper = styled.div`
  display: flex;
  padding: 15px 20px;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap; 
  gap : 10px;

  &::-webkit-scrollbar {
    display: none; 
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  border-radius: 20px;
  cursor: pointer;
  > img {
    padding-left: 10px;
  }
`;