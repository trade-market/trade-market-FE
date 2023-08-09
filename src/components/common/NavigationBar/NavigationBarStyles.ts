import styled from 'styled-components';
import { size } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${size.mobile};
  min-height: 80px;
  padding: 0px 50px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.bgColor};
  font-weight: 100;
  font-size: 12px;
`;