import React from 'react';
import styled from 'styled-components';
import optionDown from '@Assets/Icons/Search/optionDown.svg';
import FilteringOptions from '@/Options/FilteringOptions';
import useQueryString from '@hooks/useQueryString';

interface IFilterTagProps {
  open: () => void;
  setFilterNumber: React.Dispatch<React.SetStateAction<number>>;
}

const FilterTag = ({ open, setFilterNumber }: IFilterTagProps) => {
  //* 모달 오픈 & 필터 넘버 변경
  const ClickHandler = (idx: number) => {
    open();
    setFilterNumber(idx);
  };

  //* 선택 여부 반환
  const isSelected = (sort_type: string) => {
    return useQueryString(sort_type);
  };

  //* 다중/거리/단일여부 반환
  const TagText = (sort_type: string, title: string) => {
    const selected = useQueryString(sort_type);

    if (selected) {
      if (selected.includes('&')) {
        //여러개라면
        const len = selected.split('&').length;
        return `${title} ${len}`;
      } else if (selected.includes('km')) {
        //거리라면
        return `내 반경 ${selected}`;
      } else {
        // 단일 선택이라면
        return selected;
      }
    } else {
      //필터건게 없다면
      return title;
    }
  };

  return (
    <Wrapper>
      {FilteringOptions.map(({ sort_type, title }, idx) => (
        <>
          <Tag
            key={idx}
            onClick={() => ClickHandler(idx)}
            className={isSelected(sort_type) ? 'selected' : ''}
          >
            {TagText(sort_type, title)}
            <img src={optionDown} />
          </Tag>
        </>
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
  gap: 10px;
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
    background-color: #f5f5f5;
  }
`;
