import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.color.gray};
  transform: translate(-50%, -50%);
`;

function NoContents() {
  return <Text>도착한 알림이 없습니다.</Text>;
}

export default NoContents;
