import styled from 'styled-components';
import { size } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size.mobile};
  min-height: 60px;
  z-index: 10;
  position: sticky;
  /* position: fixed; */
  top: 0;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.bgColor};
`;


