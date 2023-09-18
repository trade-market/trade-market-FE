import styled from 'styled-components';

type ThemeColor =
  | 'white'
  | 'bgColor'
  | 'Mainblue'
  | 'gray'
  | 'lightGray'
  | 'whiteLightGray'
  | 'whiteGray'
  | 'black'
  | 'activeBlue'
  | 'disableBtn'
  | 'inputGray';

interface IMakePlanButtonsProps {
  children: React.ReactNode,
  onClick?: () => void;
  $bgColor?: ThemeColor;
  $color?: ThemeColor;
  $borderColor?: ThemeColor;
  $isBlock?: boolean;
}

function MakePlanButtons({
  children,
  onClick,
  ...rest
}: IMakePlanButtonsProps) {
  return (
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}

export default MakePlanButtons;

const Button = styled.button<IMakePlanButtonsProps>`
  width: 100%;
  max-width: 100%;
  max-height: 48px;
  height: 100%;
  padding: 15px;
  border-radius: 8px;
  border: none;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 40;
  background-color: ${({ theme, $bgColor }) => $bgColor ? theme.color[$bgColor] : theme.color.activeBlue};
  color: ${({ theme, $color }) => $color ? theme.color[$color] : theme.color.white};
  border: ${({ theme, $borderColor }) =>
    $borderColor ? `1px solid ${theme.color[$borderColor]}` : 'none'};
  cursor: ${({ $isBlock }) => $isBlock ? 'not-allowed' : 'pointer'};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
`;
