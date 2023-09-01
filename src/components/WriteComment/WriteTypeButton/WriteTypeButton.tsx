import styled from 'styled-components';

const Container = styled.div<{ selected: boolean | null }>`
  position: relative;
  width: 100%;
  max-width: 168px;
  min-height: 168px;
  padding: 20px;
  background-color: #ebf0fc;
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

const ImageContainer = styled.img`
  max-width: 48px;
  width: 100%;
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
