import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 0px rgba(96, 96, 96, 0.1);
  cursor: pointer;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .profile-img {
    width: 32px;
    height: 32px;
    border-radius: 60px;
  }

  .info {
    line-height: 130%;
    .name-wrap {
      display: flex;
      align-items: center;
      gap: 3px;
      > span {
        font-size: ${({ theme }) => theme.font.size.small};
        font-weight: 500;
      }
    }
    .town-date {
      font-size: ${({ theme }) => theme.font.size.xSmall};
      color: ${({ theme }) => theme.color.gray};
    }
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  gap: 12px;

  .product-img {
    width: 110px;
    height: 110px;
    border-radius: 8px;
    object-fit: cover;
  }

  .product-contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      display: flex;
      align-items: center;
      gap: 5px;
      span {
        font-size: ${({ theme }) => theme.font.size.medium};
        font-weight: 600;
      }
      .category {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px 12px;
        border-radius: 12px;
        border: 1px solid ${({ theme }) => theme.color.Mainblue};
        color: ${({ theme }) => theme.color.Mainblue};
        font-size: 10px;
        font-weight: 500;
      }
    }
    .price {
      margin-top: 5px;
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.Mainblue};
    }
    .bottom {
      line-height: 130%;
    }
  }
`;
