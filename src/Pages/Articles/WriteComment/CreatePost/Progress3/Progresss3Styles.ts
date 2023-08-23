import styled from 'styled-components';
import { size } from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 77px;
  padding: 0 20px 30px 20px;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  
  .title {
    font-weight: 600;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.large};
  }
  .description {
    color: ${({ theme }) => theme.color.lightGray};
    margin-top: 15px; 
    line-height: 18px;
    text-align: center;
    > span {
      display: block;
    }
  }
`;

export const Input = styled.input`
  width: 348px;
  height: 48px;
  padding: 16px;
  margin-top: 15px; 
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  font-size: ${({ theme }) => theme.font.size.small};
  background-color: ${({ theme }) => theme.color.inputGray};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
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
  z-index: 1;
`;
