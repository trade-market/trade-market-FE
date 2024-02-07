import React from 'react';
import styled from 'styled-components';

type ThemeColor =
  | 'white'
  | 'bgColor'
  | 'Mainblue'
  | 'gray'
  | 'lightGray'
  | 'whiteGray'
  | 'black'
  | 'activeBlue'
  | 'disableBtn'
  | 'whiteLightGray'
  | 'inputGray';

interface IActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  $customHeight?: boolean;
  $borderColor?: ThemeColor;
  color?: ThemeColor;
  $backgroundColor?: ThemeColor;
  disabled?: boolean;
  $width?: string;
}

function ActionButton({
  onClick = () => {},
  children,
  ...rest
}: IActionButtonProps) {
  return (
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}

export default ActionButton;

const Button = styled.button<IActionButtonProps>`
  width: ${({ $width }) => ($width ? $width : '100%')};
  max-width: 100%;
  padding: ${({ $customHeight }) =>
    !$customHeight ? '15px 42px' : '22px 42px'};
  border-radius: 8px;
  border: ${({ theme, $borderColor }) =>
    $borderColor ? `1px solid ${theme.color[$borderColor]}` : 'none'};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ $customHeight }) => (!$customHeight ? '600;' : '500')};
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor ? theme.color[$backgroundColor] : 'rgba(33,86,242,0.08)'};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.Mainblue};

  color: ${({ theme, disabled }) => disabled && theme.color.gray};
  background-color: ${({ theme, disabled }) =>
    disabled && theme.color.disableBtn};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
