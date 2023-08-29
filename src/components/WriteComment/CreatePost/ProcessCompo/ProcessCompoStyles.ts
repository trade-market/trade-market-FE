import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 77px;
  padding: 0 20px 20px 20px;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: 600;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.large};
  }
  .description {
    color: ${({ theme }) => theme.color.lightGray};
    margin-top: 15px; 
    line-height: 18px;
    text-align: center;
    > span {
      display: block;
    }
  }
  .currency {
    position: absolute;
    left: 85%;
    top: 75%;
    font-size: 15px;
    color: ${({ theme }) => theme.color.lightGray};
  }
`;

export const Input = styled.input`
  width: 330px; //348
  height: 48px;
  padding: 16px;
  margin-top: 15px; 
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  font-size: ${({ theme }) => theme.font.size.small};
  background-color: ${({ theme }) => theme.color.inputGray};
  justify-content: center;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
  &.price-input {
    text-align: center;
    color : ${({ theme }) => theme.color.activeBlue};
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.size.base};
  }
`;
