import styled from 'styled-components';
import { size } from '../../../styles/theme';

export const Container = styled.div`
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

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    flex-flow: row wrap;
  }
  .item {
    flex-basis: auto;
  }
  .item:nth-child(1) {
    flex-grow: 1;
  }
  .item:nth-child(2),
  .item:nth-child(3) {
    margin-left: 12px;
    width: 23px;
    height: 23px;
    cursor: pointer;
    flex-grow: 0;
    cursor: pointer;
  }
  .location {
    display: flex;
    width: max-content;
    cursor: pointer;
    font-size: 16px;
  }
  .non-user {
    color: ${({ theme }) => theme.color.lightGray};
  }
`;
