import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const MenubarContainer = styled.div`
  display: flex;
  width: 100%;

  .menu {
    display: flex;
    width: 100%;
    min-height: 46px;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.lightGray};
    font-size: 14px;
    cursor: pointer;
    border-bottom: 0.8px solid #afafaf;

    &.active {
      color: ${({ theme }) => theme.color.activeBlue};
      border-bottom: 2px solid ${({ theme }) => theme.color.activeBlue};
    }
  }
`;

export const ExchangeContainer = styled.div`
  display: flex;
  width: 100%;

  .icons {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 5px 20px;
    @media screen and (max-width: 390px) {
      padding: 5px calc(17px - 1vw);
    }
  }

  .eachIcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 12px 10px;
    cursor: pointer;
    @media screen and (max-width: 380px) {
      margin: 12px calc(10px - 1vw);
    }
  }

  .iconName {
    font-size: 12px;
    font-weight: 300;
    margin-top: 7px;
  }
`;
