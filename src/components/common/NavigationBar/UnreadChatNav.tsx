import React from 'react';
import styled from 'styled-components';

interface IUnreadChatActiveProps {}

const UnreadChatNav = ({}: IUnreadChatActiveProps) => {
  return (
    <Wrapper>
      <UnreadChatActiveButton className="UnreadChatActiveButton" />
    </Wrapper>
  );
};

export default UnreadChatNav;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-left: 6px;
`;

const UnreadChatActiveButton = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.orange};
`;
