import styled from 'styled-components';

const Container = styled.div<{ selected: boolean | null }>`
  position: relative;
  width: 168px;
  height: 168px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.whiteGray};
  opacity: ${({ selected }) => (selected || selected === null ? 1 : 0.4)};
  border-radius: 8px;
  cursor: pointer;
  border: ${({ selected, theme }) =>
    selected ? `1px solid ${theme.color.Mainblue}` : 'transparent'};
  color: ${({ selected, theme }) =>
    selected ? `${theme.color.black}` : `${theme.color.lightGray}`};
`;

const Text = styled.div`
  width: 110px;
  line-height: 130%;
`;

const ImageContainer = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

interface IWriteTypeButtonProps {
  text: string;
  imageSrc: string;
  onClick: () => void;
  selected: boolean | null;
}

function WriteTypeButton({
  text,
  imageSrc,
  onClick,
  selected,
}: IWriteTypeButtonProps) {
  return (
    <Container onClick={onClick} selected={selected}>
      <Text>{text}</Text>
      <ImageContainer src={imageSrc} alt={text} />
    </Container>
  );
}

export default WriteTypeButton;
