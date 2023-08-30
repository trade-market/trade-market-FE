import styled from 'styled-components';
import { size } from '@styles/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  justify-content: flex-end;
  padding: 0 15px;
  position: fixed;
  z-index: 12;
  bottom: 80px;

  .btn {
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
`;
