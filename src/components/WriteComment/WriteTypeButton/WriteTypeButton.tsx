import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ selected: boolean | null }>`
  position: relative;
  width: 100%;
  max-width: 168px;
  min-height: 168px;
  padding: 20px;
  background-color: ${({ selected, theme }) =>
    selected ? `#EBF0FC` : `${theme.color.whiteGray}`};
  opacity: ${({ selected }) => (selected || selected === null ? 1 : 0.4)};
  border-radius: 8px;
  cursor: pointer;
  border: ${({ selected, theme }) =>
    selected ? `1px solid ${theme.color.Mainblue}` : 'transparent'};
  color: ${({ selected, theme }) =>
    selected ? `${theme.color.black}` : `${theme.color.lightGray}`};
`;

const Text = styled.div`
  max-width: 110px;
  width: 100%;
  line-height: 130%;
`;

const ImageContainer = styled.img<{ $size: string }>`
  max-width: ${({ $size }) => $size};
  width: 100%;
  height: ${({ $size }) => $size};
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

interface IWriteTypeButtonProps {
  text: string;
  imageSrc: string;
  onClick: () => void;
  selected: boolean | null;
  size?: string;
}

function WriteTypeButton({
  text,
  imageSrc,
  onClick,
  selected,
  size = '48px',
}: IWriteTypeButtonProps) {
  return (
    <Container onClick={onClick} selected={selected}>
      <Text>{text}</Text>
      <ImageContainer src={imageSrc} $size={size} alt={text} />
    </Container>
  );
}

export default WriteTypeButton;
