import styled from 'styled-components';
import MannerCheck from '@Assets/Icons/Chat/MannerCheck.svg';
import { ReactComponent as Icon} from '@Assets/Icons/Chat/MannerCheck.svg';

const Container = styled.div<{ $selected: boolean | null }>`
  position: relative;
  width: 100%;
  max-width: 168px;
  min-height: 168px;
  padding: 20px;
  background-color:  ${({ $selected, theme }) =>
    $selected ? `#EBF0FC` : `${theme.color.whiteGray}`};
  opacity: ${({ $selected }) => ( $selected || $selected === null ? 1 : 0.4)};
  border-radius: 8px;
  cursor: pointer;
  border: ${({ $selected, theme }) =>
    $selected ? `1px solid ${theme.color.Mainblue}` : 'transparent'};
  color: ${({ $selected, theme }) =>
  $selected ? `${theme.color.activeBlue}` : `${theme.color.lightGray}`};
`;

const CheckContainer = styled.img<{ $selected: boolean | null }>`
  visibility: ${({ $selected }) => $selected ? `visible` : `hidden`};
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 130%;
`;

const ImageContainer = styled.img<{ $size: string; $selected: boolean | null }>`
  max-width: ${({ $size }) => $size};
  width: 100%;
  height: ${({ $size }) => $size};
  position: absolute;
  bottom: 20px;
  right: 20px;
  color : red;
  fill: ${({ $selected, theme }) => $selected ? theme.color.Mainblue : `none`};
`;

interface IEvaluationTypeButtonProps {
  text: string;
  imageSrc: string;
  onClick: () => void;
  selected: boolean | null;
  size?: string;
}

function EvaluationTypeButton({
  text,
  imageSrc,
  onClick,
  selected,
  size='36px'
}: IEvaluationTypeButtonProps) {
  return (
    <Container onClick={onClick} $selected={selected}>
      <Text>
        {text}
        <CheckContainer $selected={selected} src={MannerCheck} alt={text} />
        <Icon fill='#88bb19' />
      </Text>
      <ImageContainer $selected={selected} src={imageSrc} $size={size} alt={text} />
    </Container>
  );
}

export default EvaluationTypeButton;
