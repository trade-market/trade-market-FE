import styled from "styled-components";
import optionDown from '@Assets/Icons/Search/optionDown.svg';
import FilteringOptions from '@/Options/FilteringOptions';
import useQueryString from '@hooks/useQueryString';
import FilterOptionType from "@/types/FilterTypes";

interface IFilterTagProps {
  open: () => void;
}

const FilterTag = ({ open }: IFilterTagProps) => {

  //* 선택 여부 반환
  const isSelected = (option: FilterOptionType) => {
    let selected = useQueryString(option.sort_type);
    return selected;
  }

  //* 다중/거리/단일여부 반환
  const TagText = (option: FilterOptionType) => {
    let selected = useQueryString(option.sort_type);
    if (selected) {
      if (selected.includes('&')) { //여러개라면
        const len = selected.split('&').length;
        return `${option.title} ${len}` ;
      } else { //거리라면
        if (selected.includes('km')) {
          return `내 반경 ${selected}`
        }
      }
    } else { //필터건게 없다면
      return option.title;
    }
  }

  return (
    <Wrapper>
      {FilteringOptions.map((option, idx) => {
          return  (
          <Tag key={idx} onClick={open} className={isSelected(option) ? 'selected': ''}>
            {TagText(option)}
            <img src={optionDown} />
          </Tag>
        )
      })}
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

  &.selected {
    border: 1px solid ${({ theme }) => theme.color.black};
    background-color: #F5F5F5;
  }
`;