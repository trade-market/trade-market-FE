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
  | 'inputGray';

interface IActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  borderColor?: ThemeColor;
  color?: ThemeColor;
  backgroundColor?: ThemeColor;
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
  width: 100%;
  max-width: 100%;
  padding: 15px 42px;
  border-radius: 8px;
  border: ${({ theme, borderColor }) =>
    borderColor ? `1px solid ${theme.color[borderColor]}` : 'none'};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 600;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.color[backgroundColor] : 'rgba(33,86,242,0.08)'};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.Mainblue};
`;
