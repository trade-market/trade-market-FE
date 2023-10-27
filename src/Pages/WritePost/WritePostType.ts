import styled from 'styled-components';
import { ContainerTemplet } from '@/Pages/Articles/WriteComment/CreatePost/Progress2/Progresss2Styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  padding-bottom: 80px;
`;

export const PriceSlideContainer = styled(ContainerTemplet)`
  margin-top: 15px;
`;

export const PostType = styled.div`
  margin-top: 60px;
  padding : 10px 20px 0 20px;
  font-size: ${({ theme }) => theme.font.size.small};
  color : ${({ theme }) => theme.color.activeBlue};
  font-weight: 500;
`;