import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.searchBg};
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px 50px 20px;
  margin-top: 10px;
  flex-direction: column;
`;

export const Line = styled.div`
  border-bottom: 1.5px solid ${({ theme }) => theme.color.whiteGray};
`