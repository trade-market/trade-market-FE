import styled from 'styled-components';
import { size } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${size.mobile};
  min-height: 70px;
  padding: 0px 50px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.bgColor};
  font-weight: 300;
  font-size: 12px;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    .active {
      color: ${({ theme }) => theme.color.Mainblue};
    }
  }
  .icon {
    width: 21px;
    height: 21px;
    margin-bottom: 3px;
  }
`;
