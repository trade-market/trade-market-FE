import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 80px;
  padding: 0px 50px;
  position: sticky;
  top: auto;
  background-color: ${({ theme }) => theme.color.bgColor};
  font-weight: 100;
  font-size: 12px;
`;