import styled from 'styled-components';
import { size } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size.mobile};
  min-height: 48px;
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
    flex-grow: 2;
    padding-right: 20px;

    &.Only {
      padding: 0px;
    }
  }

  .gobackBtn {
    display: flex;
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
