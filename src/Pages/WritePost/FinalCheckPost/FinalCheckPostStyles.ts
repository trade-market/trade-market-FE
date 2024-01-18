import styled from 'styled-components';

export const HeadTitle = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color.activeBlue};
  font-weight: 600;
  padding: 10px;
  padding-top: 90px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
  padding: 30px 20px;
`;

export const PostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 15px;
  font-weight: 400;
  gap: 40px;
  .row {
    display: flex;
    width: 100%;
    background-color: yellow;
    /* flex-direction: column; */
  }
  .temp {
    background-color: tan;
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .title {
    width: 44%;
    color: ${({ theme }) => theme.color.gray};
  }
  .content,
  .category,
  .price,
  .images {
    display: flex;
    width: 56%;
  }
  .category {
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.activeBlue};
    align-items: center;
    .provide {
      border-radius: 12px;
      border: 1px solid ${({ theme }) => theme.color.activeBlue};
      margin-right: 5px;
      padding: 3px 12px;
    }
    .exchange {
      color: ${({ theme }) => theme.color.activeBlue};
      border: none;
      border-radius: 12px;
      background-color: #2156f214;
      margin-left: 5px;
      padding: 4px 12px;
    }
  }
  .price {
    color: ${({ theme }) => theme.color.activeBlue};
    font-weight: 600;
  }
  .images {
    overflow-x: auto;
  }
`;

export const ImgSection = styled.div`
  display: flex;
  > img {
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 8px;
    margin-right: 5px;
  }
`;
