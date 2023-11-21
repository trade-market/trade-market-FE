import React from 'react';
import styled from 'styled-components';
import Icon_like from '@Assets/Icons/Home/Post/Icon_like.svg';
import Icon_unlike from '@Assets/Icons/Home/Post/Icon_unlike.svg';

const Like = styled.div<{ 'data-isliked': string }>`
  width: 24px;
  height: 24px;
  background-image: url(${({ 'data-isliked': isLiked }) =>
    isLiked === 'true' ? Icon_like : Icon_unlike});
  cursor: pointer;
`;

interface ILikeButtonProps {
  isLiked: boolean;
  onClick?: () => void;
}

function LikeButton({ isLiked, onClick = () => {} }: ILikeButtonProps) {
  return <Like data-isliked={isLiked.toString()} onClick={onClick} />;
}

export default LikeButton;
