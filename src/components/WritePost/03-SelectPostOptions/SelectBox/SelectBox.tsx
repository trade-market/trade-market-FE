import WriteOptions from '@/Options/WriteOptions';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';

interface IPostSectionProps {
  placeholder: string;
  option?: string;
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
  const { exchangeType } = useParams();

  //* option이 따로 없다면 pageType(object/talent)가 default option
  const pageType = exchangeType.split('-')[0];
  if (!option) option = pageType;

  const selectList = WriteOptions.filter((op) => op.sort_type === option)
    .map((op) => op.contents)
    .flat();

  return (
    <S.BoxContainer onClick={() => setOptionOpen((prev) => !prev)}>
      <S.Label $change={isChange} $defaultActiveColor={defaultActiveColor}>
        {placeholder}
      </S.Label>
      <S.SelectListBox $open={optionOpen} $direction={direction}>
        {selectList.map((option, i) => (
          <S.Option key={`${option}-${i}`} onClick={onClick}>
            {option}
          </S.Option>
        ))}
      </S.SelectListBox>
    </S.BoxContainer>
  );
};

export default SelectBox;
