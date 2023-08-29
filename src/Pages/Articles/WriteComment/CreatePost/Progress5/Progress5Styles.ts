import styled from 'styled-components';
import { ContainerTemplet } from '@/Pages/Articles/WriteComment/CreatePost/Progress2/Progresss2Styles';

export const Container = styled(ContainerTemplet)`
`;

export const BlueContainer = styled.textarea`
  display: flex;
  justify-content: center;
  background-color: #2156F214;
  width: 330px;
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