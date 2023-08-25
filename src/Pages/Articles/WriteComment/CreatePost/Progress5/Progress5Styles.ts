import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const BlueContainer = styled.textarea`
  display: flex;
  justify-content: center;
  background-color: #2156F214;
  width: 348px;
  height: 268px;
  border: none;
  border-radius: 8px;
  padding: 30px 20px;
  font-size: ${({ theme }) => theme.font.size.small};
  word-spacing : -3px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
    word-spacing : -3px;
  }
`;