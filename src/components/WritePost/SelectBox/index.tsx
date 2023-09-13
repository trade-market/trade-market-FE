import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

interface IPostSectionProps {
  placeholder: string;
  option: string;
  isChange: boolean,
  dispatchType: any,
  direction?: string;
}

type selectOptionsType = {
  [key: string]: string[];
};

const selectOptions: selectOptionsType = {
  'TalentOptions': ['국어', '영어', '제2외국어', '개발/코딩', '디자인', '수학', '미술', '운동', '주식', '미용/뷰티', '취업', '자격증', '음악', '단순인력'],
  'ObjectOptions': ['전자기기', '생활 가전', '가구', '생활/주방', '도서', '의류', '미용/뷰티', '스포츠/레저', '취미', '중고차', '티켓', '식품'],
  'TimeOptions' : ['이른 아침(06시 ~ 09시)', '오전(09시 ~ 12시)', '오후(12시 ~ 18시)', '저녁(18시 ~ 00시)', '새벽(00시 ~ 06시)'],
};

const SelectBox = ({ placeholder, option, isChange, dispatchType, direction = 'down' }: IPostSectionProps) => {
  const dispatch = useDispatch();
  const [optionOpen, setOptionOpen] = useState(false);

  const handleOnChangeSelectValue = ((dispatchType: any) => {
    return (e: React.MouseEvent<HTMLElement>) => {
      const event = e.target as HTMLElement;
      dispatch(dispatchType(event.innerText));
    }
  });

  return (
    <BoxContainer onClick={() => setOptionOpen((prev) => !prev)}>
      <Label $change={isChange}>{placeholder}</Label>
      <SelectOptions
        $open={optionOpen}
        $direction={direction}
        > {
        selectOptions[option] && selectOptions[option].map((op, i) => (
          <Option
          key={i}
            onClick={handleOnChangeSelectValue(dispatchType)}>{op}</Option>
        ))
      }
      </SelectOptions>
    </BoxContainer>
  );
};

export default SelectBox;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 378px;
  width: 100%;
  height: 48px;
  padding-left: 15px;
  margin-top: 15px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.bgColor};
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  color : ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;
  background: url('/down.svg') right no-repeat;

  &::before {
    position: absolute;
    top: 7px;
    right: 15px;
    color: ${({ theme }) => theme.color.lightGray};
    font-size: 22px;
  }
`;

const Label = styled.label<{ $change: boolean }>`
  display: flex;
  color : ${({ $change, theme }) => $change ? theme.color.activeBlue : theme.color.gray};
`;

const SelectOptions = styled.ul<{ $open: boolean; $direction: string }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: ${({ $direction }) => $direction === 'down' ? '48px' : 'null'}; 
  bottom: ${({ $direction }) => $direction === 'down' ? 'null' : '49px'};
  overflow: hidden;
  overflow-y: ${({ $direction }) => $direction === 'down' ? 'scroll' : 'none'};
  width: 100%;
  height: 223px;
  max-height: ${({ $open }) => $open ? "none" : "0"};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.bgColor};
  color: ${({ theme }) => theme.color.lightGray};
  box-shadow:${({ $open, $direction }) => $open && $direction === 'down' ? "1px 3px 8px 2px rgba(152, 152, 152, 0.25);" : $open && !($direction === 'down') ? "1px -3px 8px 2px rgba(152, 152, 152, 0.25);" : "none" }; 
  z-index: 99;
`;

const Option = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.base};
  padding: 15px 0;
  padding-left: 15px;
  border-radius: 4px;
  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: #EBF0FC;
    border: 1px solid ${({ theme }) => theme.color.activeBlue};
    color : ${({ theme }) => theme.color.activeBlue};
  }
`;