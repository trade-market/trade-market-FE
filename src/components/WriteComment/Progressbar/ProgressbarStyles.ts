import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 48px;
`;

export const Line = styled.div<{ number: number; total: number }>`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.whiteGray};
  margin-top: 36px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: ${({ theme, number, total }) =>
      number > 1 ? theme.color.Mainblue : theme.color.whiteGray};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: ${({ theme, number, total }) =>
      number !== total && number !== total
        ? theme.color.Mainblue
        : theme.color.whiteGray};
  }

  & > .count {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -320%);
    font-size: 10px;
    font-weight: 500;
  }
  & > .count > span {
    color: ${({ theme }) => theme.color.lightGray};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  border: 1px solid ${({ theme }) => theme.color.Mainblue};
  background-color: ${({ theme }) => theme.color.white};
  z-index: 1;

  & > img {
    width: 16px;
    height: 16px;
  }
`;

export const DotStart = styled.div<{ number: number; total: number }>`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 9px;
  height: 9px;

  & > img {
    display: ${({ number, total }) =>
      number === total || number >= 2 ? 'block' : 'none'};
    width: 100%;
    height: 100%;
  }
  z-index: 1;
`;

export const DotEnd = styled.div<{ number: number; total: number }>`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 9px;
  height: 9px;
  & > img {
    display: ${({ number, total }) => (number !== total ? 'block' : 'none')};
    width: 100%;
    height: 100%;
  }
  z-index: 1;
`;
