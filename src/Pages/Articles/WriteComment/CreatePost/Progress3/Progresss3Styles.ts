import styled from 'styled-components';
import { ContainerTemplet } from '@/Pages/Articles/WriteComment/CreatePost/Progress2/Progresss2Styles';

export const Container = styled(ContainerTemplet)`
`;

export const Line = styled.div`
  margin: 10px 0;
  position: relative;
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.color.gray};
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 100%;
  padding: 0 15px;
  gap: 12px;

  > button {
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.font.size.small};
    margin-top: 5px;
    padding: 8px 20px;
    background-color: transparent;
    border-radius: 20px;
    color: ${({ theme }) => theme.color.lightGray};
    border: 1px solid #E5E7EB;
    cursor: pointer;
  }

  .active {
    color: ${({ theme }) => theme.color.activeBlue};
    border: 1px solid ${({ theme }) => theme.color.activeBlue};
    background-color: #EBF0FC;
  }
`;