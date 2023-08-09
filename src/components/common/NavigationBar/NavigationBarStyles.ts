import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 80px;
  margin: auto;
  background-color: ${({ theme }) => theme.color.bgColor};
`;