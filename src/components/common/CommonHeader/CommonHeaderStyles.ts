import styled from 'styled-components';
import { size } from '../../../styles/theme';

export const Container = styled.div<{ $hidden: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size.mobile};
  min-height: 60px;
  z-index: 2;
  position: fixed;
  top: 0;
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: 600;
  background-color: ${({ theme }) => theme.color.bgColor};
  justify-content: center;
  padding: 0 15px;
  .title {
    display: flex;
    justify-content: center;
    padding-left: 10px;
    flex-grow: 1;
    &.Only {
      padding: 0px;
    }
  }
  .gobackBtn {
    display: flex;
    visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;

export const CloseButton = styled.div<{ $display: string }>`
  display: ${({ $display }) => $display};
  justify-content: flex-end;
  padding-right: 5px;
  cursor: pointer;
`;

export const OptionButton = styled.img`
  cursor: pointer;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const DeleteButton = styled(Button)`
  color: ${({ theme }) => theme.color.orange};
`;

export const CancelButton = styled(Button)`
  color: ${({ theme }) => theme.color.lightGray};
`;
