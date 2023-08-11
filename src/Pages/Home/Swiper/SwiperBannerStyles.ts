import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 48px;
  background-color: ${({ theme }) => theme.color.Mainblue};

  .slide-item {
    display: flex;
    width: auto;
    justify-content: center;
  }
`;