import { size } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 21px;
  margin-top: 77px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const ContentsContainer = styled.div``;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.color.lightGray};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  position: fixed;
  bottom: 48px;
  padding: 0 21px;
  align-items: center;
  z-index: 99;
`;
