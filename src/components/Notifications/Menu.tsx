import styled, { css } from 'styled-components';

const Container = styled.div<{ $isActive: boolean }>`
  ${({ theme, $isActive }) => css`
    background-color: ${theme.color.white};
    width: 50%;
    padding: 14px 0;
    text-align: center;
    color: ${$isActive ? theme.color.Mainblue : theme.color.lightGray};
    border-bottom: ${$isActive ? '2px' : '1px'} solid
      ${$isActive ? theme.color.Mainblue : theme.color.lightGray};
    font-weight: ${$isActive && 500};
    cursor: pointer;
  `}
`;

interface IMenuProps {
  isActive: boolean;
  title: string;
  onClick: () => void;
}

function Menu({ isActive, title, onClick }: IMenuProps) {
  return (
    <Container $isActive={isActive} onClick={onClick}>
      {title}
    </Container>
  );
}

export default Menu;
