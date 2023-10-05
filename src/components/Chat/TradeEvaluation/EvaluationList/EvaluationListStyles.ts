import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 60px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    align-items: center;
    padding: 7px 0;
  }

  .mannerIcon {
    width: 24px;
    height: 24px;
  }
`;

export const TitleText = styled.div`
  color: ${({ theme }) => theme.color.Mainblue};
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.large};
  margin-left: 7px;
`;

export const ListConTainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  gap: 25px;
`;

export const ListBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.font.size.base};
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 8px;
  cursor: pointer;

  &.active, &.my {
    border: 1px solid ${({ theme }) => theme.color.Mainblue};
    color : ${({ theme }) => theme.color.Mainblue};
  }

  &.my {
    cursor: not-allowed;
  }
`;