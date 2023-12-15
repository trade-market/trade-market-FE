import React from 'react';
import styled from 'styled-components';
import Category from '@components/WritePost/Category';
import sample_sale_image from '@Assets/Icons/Chat/sample_sale_image.svg';

const UserInfo = () => {
  return (
    <Container>
      <img src={sample_sale_image} />
      <InfoContainer>
        <div>선글라스</div>
        <div>21,000~24,000원</div>
        <Category provide={'의류'} exchange={'의류'} />
      </InfoContainer>
    </Container>
  );
};

export default UserInfo;

const Container = styled.div`
  display: flex;
  padding-bottom: 15px;
`;

const InfoContainer = styled(Container)`
  flex-direction: column;
  padding: 2px 12px;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: 500;
  justify-content: space-between;
  :nth-child(2) {
    color: ${({ theme }) => theme.color.activeBlue};
  }
`;
