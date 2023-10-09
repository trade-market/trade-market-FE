import { useNavigate } from 'react-router-dom';
import * as P from './PostActionButtonsStyles';
import LikeButton from '@/components/common/Buttons/LikeButton';
import BlueButton from '@components/common/Buttons/BlueButton';
import ActionButton from '@/components/common/Buttons/ActionButton';

interface IPostActionsProps {
  isOfferPost: boolean;
}

function PostActions({ isOfferPost }: IPostActionsProps) {
  const navigate = useNavigate();

  const handleCommentButtonClick = () => {
    navigate('write-comment');
  };

  return (
    <P.Container>
      <LikeButton isLiked={false} />
      <P.ButtonsContainer $isOfferPost={isOfferPost}>
        {isOfferPost && (
          <ActionButton onClick={handleCommentButtonClick}>
            댓글쓰기
          </ActionButton>
        )}
        <BlueButton className={!isOfferPost && 'only-chat'}>
          채팅하기
        </BlueButton>
      </P.ButtonsContainer>
    </P.Container>
  );
}

export default PostActions;
