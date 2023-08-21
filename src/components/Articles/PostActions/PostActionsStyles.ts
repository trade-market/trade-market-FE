import { size } from '@/styles/theme';
import styled from 'styled-components';

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

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const CommentButton = styled.button`
  width: 100%;
  max-width: 135px;
  padding: 15px 42px;
  border-radius: 8px;
  border: none;
  background-color: rgba(33, 86, 242, 0.08);
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 600;
  color: ${({ theme }) => theme.color.Mainblue};
`;
