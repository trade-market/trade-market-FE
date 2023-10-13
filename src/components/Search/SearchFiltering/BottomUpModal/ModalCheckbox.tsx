import { useState, useEffect } from "react";
import FilterOptionType from "@/types/FilterTypes";
import useQueryString from '@hooks/useQueryString';
import styled from "styled-components"; 

interface IModalCheckboxProps {
  filter: FilterOptionType;
  setSelectFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const ModalCheckbox = ({ filter, setSelectFilter }: IModalCheckboxProps) => {
  const { sort_type, contents } = filter;
  const selected = useQueryString(sort_type);
  const [checkItems, setCheckItems] = useState<Set<unknown>>(new Set());

  const checkItemHandler = (e: React.ChangeEvent<HTMLInputElement>, op: string) => {
    const { checked } = e.target;
    if (checked) {
      setCheckItems((prev) => new Set([...prev, op]));
    }
    else if (!checked && checkItems.has(op)) {
      setCheckItems((prev) => {
        const newCheckItems = new Set(prev);
        newCheckItems.delete(op);
        return newCheckItems;
      });
    } 
  };

  useEffect(() => {
    let newCheckItems = [...checkItems].reduce((acc, cur, i) => i !== 0 ? `${acc}&${cur}` : `${cur}`, '').toString();
    setSelectFilter([sort_type, newCheckItems]);
  }, [checkItems])

  //* 선택한 필터가 있다면 필터 옵션 눌렀을 때 active 되겠금
  useEffect(() => { 
    if (selected) {
      let newSelected = selected.split('&');
      setCheckItems((prev) => new Set([...prev, ...newSelected]));
    };
  }, []);

  return (
    <Container>
      {
        contents.map((op, idx) => (
        <CheckList key={idx}>
          <Input
            id={String(idx)}
            type='checkbox'
            checked={checkItems.has(op) ? true : false}
            onChange={(e) =>checkItemHandler(e, op)}
          />
          <label>{op}</label>
        </CheckList>  
        ))
      }
    </Container>
  );
};

export default ModalCheckbox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap : 32px;
`;

const CheckList = styled.div`
  display: flex;
  align-items: center;
  gap : 10px;
  font-size: 15px;
  color: ${({ theme }) => theme.color.lightGray};
`;

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 4px;
  cursor: pointer;
  height: 20px;
  width: 20px;
  border: 1px solid ${({ theme }) => theme.color.whiteGray}; 
  &:checked {
    background-color: ${({ theme }) => theme.color.activeBlue}; 
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.5714 4L6.85714 11.1429L4 9' stroke='%23FDFDFD' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-position: 50%;
  }
`;
