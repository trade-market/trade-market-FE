import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 60px;
  object-fit: cover;
  margin-right: 8px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Nickname = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const Location = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.color.lightGray};
`;
