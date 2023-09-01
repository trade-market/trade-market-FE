import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 21px;
  /* margin-top: 60px; */
  /* padding-top: 10px; */
`;

export const PostType = styled.div`
  margin-top: 60px;
  padding : 10px 20px;
  font-size: ${({ theme }) => theme.font.size.small};
  color : ${({ theme }) => theme.color.activeBlue};
  font-weight: 500;
`;