import styled from 'styled-components';
import { size } from '../../../styles/theme';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${size.mobile};
  min-height: 100vh;
  margin: auto;
  background-color: ${({ theme }) => theme.color.white};
`;
