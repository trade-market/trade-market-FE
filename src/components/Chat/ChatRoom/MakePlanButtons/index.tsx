import styled from 'styled-components';


export const Button = styled.button<{ $isPlans: boolean; $maxwidth: string }>`
  width: 100%;
  max-width: ${({ $maxwidth }) => $maxwidth};
  padding: 15px 42px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme, $isPlans }) =>
  $isPlans ? theme.color.disableBtn : theme.color.activeBlue};
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme, $isPlans }) =>
    $isPlans ? theme.color.gray : theme.color.white};
  cursor: ${({ $isPlans }) => ($isPlans ? 'not-allowed' : 'pointer')};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
`;

interface IMakePlanButtonsProps {
  isPlans?: boolean;
  children: React.ReactNode;
  maxWidth?: string;
  onClick?: () => void;
  className?: string;
}

function MakePlanButtons({
  isPlans = false,
  children,
  onClick,
  maxWidth = '135px',
  className,
}: IMakePlanButtonsProps) {
  return (
    <Button
      $isPlans={isPlans}
      onClick={onClick}
      $maxwidth={maxWidth}
      className={className}
    >

      
      {children}
    </Button>
  );
}

export default MakePlanButtons;