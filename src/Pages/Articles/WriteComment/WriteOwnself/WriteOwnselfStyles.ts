import styled from 'styled-components';
import { size } from '@/styles/theme';

export const ProgressWrapper = styled.div`
  padding-top: 48px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 77px;
  padding: 0 20px 30px 20px;
  align-items: center;
  flex-direction: column;

  .title {
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.size.large};
  }

  .description,
  :nth-child(4) {
    color: ${({ theme }) => theme.color.lightGray};
    padding-top: 20px;
  }

  :nth-child(3) {
    padding-top: 20px;
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  position: fixed;
  bottom: 48px;
  padding: 0 21px;
  align-items: center;
  z-index: 99;
`;
