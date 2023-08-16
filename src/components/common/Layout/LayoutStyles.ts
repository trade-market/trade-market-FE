import styled from 'styled-components';
import { size } from '@/styles/theme';

export const Wrapper = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  max-width: ${size.mobile};
  min-height: ${({ height }) => `${height}px`};
  margin: auto;
  background-color: ${({ theme }) => theme.color.white};
`;
