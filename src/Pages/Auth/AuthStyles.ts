import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: 600;
`;

export const ButtonsContainer = styled.div`
  margin: 30px 0;
`;
