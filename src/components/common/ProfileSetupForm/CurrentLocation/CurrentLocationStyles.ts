import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 420px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const TitleContainer = styled.div``;

export const SmallTitle = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.color.lightGray};
  margin-bottom: 4px;
`;
