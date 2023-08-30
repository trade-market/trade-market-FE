import styled from 'styled-components';
import { ContainerTemplet } from '@/Pages/Articles/WriteComment/CreatePost/Progress2/Progresss2Styles';

export const Container = styled(ContainerTemplet)`
`;

export const BlueContainer = styled.div`
  display: flex;
  background-color: #2156F214;
  width: 330px;
  height: 268px;
  border: none;
  border-radius: 8px;
  padding: 30px 20px;
  flex-direction: column;
  justify-content: center;
`;

export const PostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.size.small};
  gap: 20px;

  .row {
    display: flex;
  }
  
  .title {
    width: 30%;
    color : ${({ theme }) => theme.color.gray};
  }
  .content {
    width: 70%;
  }

  .img {
    width: 48px;
    height: 48px;
  }
`;