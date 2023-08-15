import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    flex-flow: row wrap;
  }
  .item {
    flex-basis: auto;
  }
  .item:nth-child(1) {
    flex-grow: 1;
  }
  .item:nth-child(2), .item:nth-child(3) {
    margin-left: 12px;
    width: 23px;
    height: 23px;
    cursor: pointer;
    flex-grow: 0;
    cursor: pointer;
  }
  .location {
    display: flex;
    width : max-content;
    cursor: pointer;
    font-size: 16px;
  }
`;


