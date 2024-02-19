import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 378px;
  width: 100%;
  height: 48px;
  padding-left: 15px;
  margin-top: 15px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.bgColor};
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;
  background: url('/down.svg') right no-repeat;

  &::before {
    position: absolute;
    top: 7px;
    right: 15px;
    color: ${({ theme }) => theme.color.lightGray};
    font-size: 22px;
  }
`;

export const Label = styled.label<{
  $change: boolean;
  $defaultActiveColor: boolean;
}>`
  display: flex;
  color: ${({ $change, $defaultActiveColor, theme }) =>
    $defaultActiveColor
      ? theme.color.black
      : $change
      ? theme.color.activeBlue
      : theme.color.gray};
`;

export const SelectListBox = styled.ul<{ $open: boolean; $direction: string }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: ${({ $direction }) => ($direction === 'down' ? '48px' : 'null')};
  bottom: ${({ $direction }) => ($direction === 'down' ? 'null' : '49px')};
  overflow: hidden;
  overflow-y: ${({ $direction }) =>
    $direction === 'down' ? 'scroll' : 'none'};
  width: 100%;
  height: 223px;
  max-height: ${({ $open }) => ($open ? 'none' : '0')};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.bgColor};
  color: ${({ theme }) => theme.color.lightGray};
  box-shadow: ${({ $open, $direction }) =>
    $open && $direction === 'down'
      ? '1px 3px 8px 2px rgba(152, 152, 152, 0.25);'
      : $open && !($direction === 'down')
      ? '1px -3px 8px 2px rgba(152, 152, 152, 0.25);'
      : 'none'};
  z-index: 99;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.base};
  padding: 15px 0;
  padding-left: 15px;
  border-radius: 4px;
  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: #ebf0fc;
    border: 1px solid ${({ theme }) => theme.color.activeBlue};
    color: ${({ theme }) => theme.color.activeBlue};
  }
`;
