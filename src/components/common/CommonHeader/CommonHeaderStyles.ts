import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 60px;
  top: 0;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.bgColor};
`;


