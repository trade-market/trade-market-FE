import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px 50px 20px;
  margin-top: 10px;
  flex-direction: column;
  /* background-color: yellow; */

  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 15px;
    max-height: 170px;
  }
  .item {
    display: flex;
    padding: 8px 0;
    align-items: center;
  }

  .no {
    font-weight: 600;
    margin-right: 12px;
  }
  
  .content {
    color: ${({ theme }) => theme.color.lightGray};
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;
