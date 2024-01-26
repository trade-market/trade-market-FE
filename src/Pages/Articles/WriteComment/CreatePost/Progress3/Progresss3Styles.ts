import styled from 'styled-components';
import { ContainerTemplet } from '@/Pages/Articles/WriteComment/CreatePost/Progress2/Progresss2Styles';
import { InputContainerTemplet } from '@components/WriteComment/CreatePost/PriceSlideBar/PriceSlideBarStyles';
import { size } from '@/styles/theme';

export const Container = styled(ContainerTemplet)``;

export const InputContainer = styled(InputContainerTemplet)`
  padding: 0 21px;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${size.mobile};
  height: 48px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 16px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.font.size.small};
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  background-color: ${({ theme }) => theme.color.inputGray};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
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
  padding: 0 10px;
  gap: 8px;

  > button {
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.font.size.small};
    margin-top: 3px;
    padding: 6px 16px;
    background-color: transparent;
    border-radius: 20px;
    color: ${({ theme }) => theme.color.lightGray};
    border: 1px solid #e5e7eb;
    cursor: pointer;
  }

  .active {
    color: ${({ theme }) => theme.color.activeBlue};
    border: 1px solid ${({ theme }) => theme.color.activeBlue};
    background-color: #ebf0fc;
  }
`;
