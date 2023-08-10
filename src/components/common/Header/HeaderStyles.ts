import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 30px;
  margin: 0 auto;

  .head {
    display: flex;
    align-items: center;
    width: 100%;
    flex-flow: row wrap;
  }
  .item {
    flex-basis: auto;
    cursor: pointer;
  }
  .item:nth-child(1) {
    font-size: 16px;
    flex-grow: 1;
  }
  .item:nth-child(2), .item:nth-child(3) {
    margin-left: 15px;
    width: 22px;
    height: 20px;
  }
`;


