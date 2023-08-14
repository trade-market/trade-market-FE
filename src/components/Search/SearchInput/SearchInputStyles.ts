import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  padding: 10px 20px;
`;

export const Input = styled.input`
  padding: 16px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  font-size: ${({ theme }) => theme.font.size.small};
  background-color: ${({ theme }) => theme.color.searchBg};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;