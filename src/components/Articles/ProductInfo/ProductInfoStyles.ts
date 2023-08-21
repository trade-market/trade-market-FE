import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 24px;
  margin-bottom: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const leftContainerInTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Category = styled.div`
  display: flex;
  padding: 3px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.Mainblue};
  font-size: 10px;
  color: ${({ theme }) => theme.color.Mainblue};
  font-weight: 500;
  line-height: 130%;
`;

export const Date = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.color.gray};
  font-weight: 500;
`;

export const InfoContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > div {
    width: 100%;
    display: flex;
  }

  & .category {
    display: flex;
    padding: 3px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: rgba(33, 86, 242, 0.08);
    font-size: 10px;
    font-weight: 500;
    line-height: 130%;
    color: ${({ theme }) => theme.color.Mainblue};
  }

  & .price {
    font-size: 18px;
    font-weight: 600;
    line-height: 130%;
    color: ${({ theme }) => theme.color.Mainblue};
  }
`;

export const InfoTitle = styled.div`
  width: 130px;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray};
`;

export const InfoDate = styled.div`
  font-size: 15px;
  line-height: 130%;
  color: ${({ theme }) => theme.color.black};
`;

export const Description = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: rgba(33, 86, 242, 0.08);
  border-radius: 8px;
  height: 109px;
`;
