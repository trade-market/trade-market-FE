import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.color.lightGray};
  font-size: 16px;
  text-align: center;
`;

export const H3Text = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.medium};
`;
