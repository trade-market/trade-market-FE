import styled from 'styled-components';

export const Button = styled.button<{
  bgColor: string;
  fontColor?: string;
  border?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: ${({ border, theme }) =>
    border ? `0.2px solid ${theme.color.darkGray}` : 'none'};
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  background-color: ${({ bgColor }) => bgColor};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 600;
  color: ${({ fontColor }) => fontColor && '#fff'};
  cursor: pointer;
`;

export const Icon = styled.img`
  position: absolute;
  left: 16px;
  width: 20px;
  height: 20px;
`;
