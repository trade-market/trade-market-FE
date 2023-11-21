import React from 'react';
import styled from 'styled-components';

export const Button = styled.button<{
  disabled: boolean;
  $maxwidth: string;
  $customHeight: boolean;
}>`
  width: 100%;
  max-width: ${({ $maxwidth }) => $maxwidth};
  padding: ${({ $customHeight }) =>
    !$customHeight ? '15px 42px' : '22px 42px'};
  border-radius: 8px;
  border: none;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.disableBtn : theme.color.activeBlue};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ $customHeight }) => (!$customHeight ? '600;' : '500')};
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
  customHeight?: boolean;
  onClick?: () => void;
  className?: string;
}

function BlueButton({
  disabled = false,
  children,
  onClick,
  maxWidth = '135px',
  className,
  customHeight,
}: IBlueButtonProps) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      $maxwidth={maxWidth}
      className={className}
      $customHeight={customHeight}
    >
      {children}
    </Button>
  );
}

export default BlueButton;
