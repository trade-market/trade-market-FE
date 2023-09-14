import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: inherit;
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

export const SignUpContainer = styled.div``;

export const SmallTitle = styled.div`
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.color.lightGray};
  margin-bottom: 12px;
`;
export const GoHomeText = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  color: ${({ theme }) => theme.color.gray};
  text-decoration: underline;
`;
