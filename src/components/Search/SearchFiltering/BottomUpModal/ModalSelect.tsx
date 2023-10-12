import { useState } from "react";
import styled from "styled-components"; 
import check_blue from '@Assets/Icons/Chat/check_blue.svg';

interface IModalSelectProps {
  
}

const ModalSelect = () => {
  const arr = ['1:1', '오퍼'];
  const [select, setSelect] = useState('');

  //* 카테고리 select
  const Selecthandler = (index: number) => {
    const newSelectList = Array(arr.length).fill(false);
    newSelectList[index] = true;
    setSelect(arr[index]);
  };

  return (
    <Container>
      {
        arr.map((op, i) => (
          <OptionList
            key={i}
            className={select === arr[i] ? 'active ' : ''}
            onClick={() => Selecthandler(i)}
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