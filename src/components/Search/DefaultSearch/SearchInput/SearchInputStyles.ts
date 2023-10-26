import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  position: relative;

  img {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 85%;
    top: 34%;
    cursor: pointer;
    @media screen and (max-width: 395px) {
      left : 83%;
    }
  }
`;

export const Input = styled.input`
  ime-mode: auto;
  -webkit-ime-mode: auto;
  padding: 16px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  font-size: ${({ theme }) => theme.font.size.small};
  background-color: ${({ theme }) => theme.color.inputGray};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;