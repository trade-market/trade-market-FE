import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px 50px 20px;
  margin-top: 10px;
  flex-direction: column;

  .keywords {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    width: 100%;
    gap: 7px;
  }

  .keyword {
    display: flex;
    margin-top: 5px;
    color: ${({ theme }) => theme.color.activeBlue};
    font-size: ${({ theme }) => theme.font.size.small};
    border: 1px solid ${({ theme }) => theme.color.activeBlue};
    padding: 5px 5px 5px 10px;
    border-radius: 20px;
    align-items: center;
  }

  .deleteBtn {
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: 3px;
  }

  .no-keyword {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0 0 0;
    color: #b5b5b5;
  }
`;
