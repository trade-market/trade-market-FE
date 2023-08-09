import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: lavender;
  height: 500px;
  width: 100%;
  display: flex;
`;

export const Memubar = styled.div`
  width: 100%;
  display: flex;
  height: 46px;
  align-items : center;
  justify-content: space-around;

  .menu {
    display: flex;
    width: 100%;
    height: 100%;
    align-items : center;
    justify-content: center;
    color : ${({ theme }) => theme.color.lightGray}; 
    font-size: 14px;
    cursor: pointer;
    border-bottom: 1px solid #afafaf;

    &.active {
      color : ${({ theme }) => theme.color.activeBlue}; 
      border-bottom: 1.5px solid ${({ theme }) => theme.color.activeBlue}; 
    } 
  }
`;