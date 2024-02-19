import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import check_blue from '@Assets/Icons/Chat/check_blue.svg';
import useQueryString from '@hooks/useQueryString';
import FilterPropsTypes from '@/types/FilterPropsTypes';

const ModalSelect = ({
  sort_type,
  contents,
  setSelectFilter,
}: FilterPropsTypes) => {
  const selected = useQueryString(sort_type);
  const [select, setSelect] = useState('');

  //* 카테고리 select
  const Selecthandler = (index: number) => {
    const newSelectList = Array(contents.length).fill(false);
    newSelectList[index] = true;
    setSelect(contents[index]);
    setSelectFilter([sort_type, contents[index]]);
  };

  //* 선택한 필터가 있다면 필터 옵션 눌렀을 때 active 되겠금
  useEffect(() => {
    if (selected) {
      setSelect(selected);
    }
  }, []);

  return (
    <Container>
      {contents?.map((op, idx) => (
        <OptionList
          key={idx}
          className={select === contents[idx] ? 'active ' : ''}
          onClick={() => Selecthandler(idx)}
        >
          {op}
          <img src={check_blue} />
        </OptionList>
      ))}
    </Container>
  );
};

export default ModalSelect;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const OptionList = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.medium};
  cursor: pointer;
  > img {
    visibility: hidden;
    height: 21px;
    width: 21px;
  }

  &.active {
    color: ${({ theme }) => theme.color.activeBlue};
    > img {
      visibility: visible;
    }
  }
`;
