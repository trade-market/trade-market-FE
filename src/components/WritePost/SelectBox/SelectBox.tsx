import { useState } from 'react';
import * as S from './SelectBoxStyles';
import WriteOptions from '@/Options/WriteOptions';

interface IPostSectionProps {
  placeholder: string;
  option: string;
  isChange: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement>;
  direction?: string;
  defaultActiveColor?: boolean;
}

const SelectBox = ({
  placeholder,
  option,
  isChange,
  onClick,
  direction = 'down',
  defaultActiveColor,
}: IPostSectionProps) => {
  const [optionOpen, setOptionOpen] = useState(false);
  const selectList = WriteOptions.filter((op) => op.sort_type === option)
    .map((op) => op.contents)
    .flat();

  return (
    <S.BoxContainer onClick={() => setOptionOpen((prev) => !prev)}>
      <S.Label $change={isChange} $defaultActiveColor={defaultActiveColor}>
        {placeholder}
      </S.Label>
      <S.SelectListBox $open={optionOpen} $direction={direction}>
        {selectList.map((op, i) => (
          <S.Option key={i} onClick={onClick}>
            {op}
          </S.Option>
        ))}
      </S.SelectListBox>
    </S.BoxContainer>
  );
};

export default SelectBox;
