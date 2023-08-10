import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 20px;

  .Menu-title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-basis: auto;
  width: 100%;
  height: 150px;
  cursor: pointer;
  
  .img-section {
    display: flex;
    flex-direction: column;
    padding: 10px 15px; 
    .postImage {
      margin: 2px;
      width: 90px;
      height: 80px;
    }
  }

  .content-section {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    padding: 20px 0;
    justify-content: space-between;

    .item:nth-child(1), .item:nth-child(3) {
      font-weight: 500;
      font-size: 14px;
    }
    .item:nth-child(3) {
      color : #ff5b22;
    }
    .item:nth-child(2) {
      font-size: 12px;
      color: ${({ theme }) => theme.color.lightGray};
    }
  }

  .seb-section {
    display: flex;
    flex-direction: column;
    padding: 15px 10px;

    .like-icon {
      display: flex;
      margin-bottom: 50px;
      margin-left: 10px;
    }
    .subImpo {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      gap: 3px;
      color : #AFAFAF;
      font-size: 12px;
    }
  }
`;