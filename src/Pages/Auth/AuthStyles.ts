import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: 600;
`;

export const ButtonsContainer = styled.div``;

export const DividedLine = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(33, 86, 242, 0.1);
  margin: 0;
`;

export const SignUpContainer = styled.div``;

export const SmallTitle = styled.div`
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.color.darkGray};
  margin-bottom: 12px;
`;

export const SignUpButton = styled.button`
  width: 100%;
  padding: 17px 0px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.mainBlue};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  background-color: inherit;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.mainBlue};
  cursor: pointer;
`;
