import styled from 'styled-components';

export const Button = styled.button<{ disabled: boolean; maxWidth: string }>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  padding: 15px 42px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.disableBtn : theme.color.activeBlue};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 600;
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.gray : theme.color.white};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
`;

interface IBlueButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  maxWidth?: string;
  onClick?: () => void;
}

function BlueButton({
  disabled = false,
  children,
  onClick,
  maxWidth = '135px',
}: IBlueButtonProps) {
  return (
    <Button disabled={disabled} onClick={onClick} maxWidth={maxWidth}>
      {children}
    </Button>
  );
}

export default BlueButton;
