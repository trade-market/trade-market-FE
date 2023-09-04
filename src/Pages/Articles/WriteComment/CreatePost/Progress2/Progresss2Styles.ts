import styled from 'styled-components';

export const ContainerTemplet = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled(ContainerTemplet)`
  color: ${({ theme }) => theme.color.lightGray};

  > img {
    width: 204px;
    height: 204px;
    border-radius: 8px;
    cursor: pointer;
    margin: 15px;
  }
`;