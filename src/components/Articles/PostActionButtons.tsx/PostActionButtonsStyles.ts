import styled from 'styled-components';
import { size } from '@/styles/theme';

export const Container = styled.div`
  width: 100%;
  max-width: ${size.mobile};
  position: fixed;
  bottom: 0;
  padding: 18px 20px;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 99;
`;

export const ButtonsContainer = styled.div<{ $isOfferPost: Boolean }>`
  display: flex;
  gap: 12px;

  .only-chat {
    max-width: 277px;
    width: 277px;
  }
`;
