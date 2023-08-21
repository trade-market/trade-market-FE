import styled from 'styled-components';
import Icon_like from '@Assets/Icons/Home/Post/Icon_like.svg';
import Icon_unlike from '@Assets/Icons/Home/Post/Icon_unlike.svg';

const Like = styled.div<{ isLiked: boolean }>`
  width: 24px;
  height: 24px;
  background-image: url(${({ isLiked }) =>
    isLiked ? Icon_like : Icon_unlike});
  cursor: pointer;
`;

interface ILikeButtonProps {
  isLiked: boolean;
  // Todo: onClick delete optional
  onClick?: () => void;
}

function LikeButton({ isLiked, onClick }: ILikeButtonProps) {
  return <Like isLiked={isLiked} onClick={onClick} />;
}

export default LikeButton;
