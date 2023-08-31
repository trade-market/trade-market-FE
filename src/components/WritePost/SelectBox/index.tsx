import { useState } from 'react';
import styled from 'styled-components';

interface IPostSectionProps {
  placeholder: string;
  option: number;
}

  const selectOptions = [
    { TalentOptions: ['국어', '영어', '제2외국어', '개발/코딩', '디자인', '수학', '미술', '운동', '주식', '미용/뷰티', '취업', '자격증', '음악', '단순인력'] },
    { ObjectOptions: [] },
    { TimeOptions: ['이른 아침(06시 ~ 09시', '오전(09시 ~ 12시)', '오후(12시 ~ 18시)', '저녁(18시 ~ 00시)', '새벽(00시 ~ 06시'] },
  ];

const SelectBox = ({placeholder, option } : IPostSectionProps) => {
  const [OptionOpen, setOptionOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(placeholder);
  const selectArr = Object.values(selectOptions[option])[0];

  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.target as HTMLElement;
    setSelectValue(event.innerText);
  }

  return (
    <BoxContainer onClick={() => setOptionOpen((prev) => !prev)}>
      <Label $change={selectValue === placeholder}>{selectValue}</Label>
      <SelectOptions $open={OptionOpen}> {
        selectArr && selectArr.map((op: string, i: number) => (
          <Option
            key={i}
            onClick={handleOnChangeSelectValue}>{op}</Option>
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
  width: 378px;
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
    /* content: "⌵"; */
    position: absolute;
    top: 7px;
    right: 15px;
    color: ${({ theme }) => theme.color.lightGray};
    font-size: 22px;
  }
`;

const Label = styled.label<{ $change: boolean }>`
  display: flex;
  color : ${({ $change, theme }) => $change ? theme.color.gray : theme.color.activeBlue};
`;

const SelectOptions = styled.ul<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: max-content;
  max-height: ${({ $open }) => $open ? "none" : "0" };
  /* padding: 0 10px; */
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.bgColor};
  color: ${({ theme }) => theme.color.lightGray};
  box-shadow:${({ $open }) => $open ? "1px 3px 4px 2px rgba(152, 152, 152, 0.25);" : "none" }; 
  z-index: 999;
`;
const Option = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.base};
  height: 48px;
  padding-left: 15px;
  border-radius: 4px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #EBF0FC;
    border: 1px solid ${({ theme }) => theme.color.activeBlue};
    color : ${({ theme }) => theme.color.activeBlue};
  }
`;