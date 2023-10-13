import { useState } from "react";
import styled from "styled-components"; 
import check_blue from '@Assets/Icons/Chat/check_blue.svg';
import FilterOptionType from "@/types/FilterTypes";

interface IModalSelectProps {
  filter: FilterOptionType;
  setSelectFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const ModalSelect = ({ filter, setSelectFilter }: IModalSelectProps) => {
  const { sort_type, contents } = filter;
  const [select, setSelect] = useState('');

  //* 카테고리 select
  const Selecthandler = (index: number) => {
    const newSelectList = Array(contents.length).fill(false);
    newSelectList[index] = true;
    setSelect(contents[index]);
    setSelectFilter([sort_type, contents[index]]);
  };

  return (
    <Container>
      {
        contents.map((op, idx) => (
          <OptionList 
            key={idx}
            className={select === contents[idx] ? 'active ' : ''}
            onClick={() => Selecthandler(idx)}
          >
          {op}
          <img src={check_blue} />
          </OptionList>
        ))
      }
    </Container>
  );
};

export default ModalSelect;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap : 32px;
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
  }

  &.active {
    color: ${({ theme }) => theme.color.activeBlue};
    > img {
    visibility: visible;
    }
  }
`;