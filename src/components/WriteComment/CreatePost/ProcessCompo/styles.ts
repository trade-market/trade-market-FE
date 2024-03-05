import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 77px;
  padding: 0 20px;
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
`;
