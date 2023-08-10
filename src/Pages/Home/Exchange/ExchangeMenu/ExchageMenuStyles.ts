import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: lavender; */
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
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
    border-bottom: 0.7px solid #afafaf;

    &.active {
      color : ${({ theme }) => theme.color.activeBlue}; 
      border-bottom: 1.7px solid ${({ theme }) => theme.color.activeBlue}; 
    } 
  }
`;

export const ExchangeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 15px;

  .eachIcon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 10px;
    cursor: pointer;
  }
  .iconName {
    font-size: 12px;
    font-weight: 300;
    margin-top: 7px;
  }
`;