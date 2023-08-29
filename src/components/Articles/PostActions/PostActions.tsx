import { useNavigate } from 'react-router-dom';
import * as P from './PostActionsStyles';
import LikeButton from '@/components/common/Buttons/LikeButton';
import BlueButton from '@components/common/Buttons/BlueButton';
import ActionButton from '@/components/common/Buttons/ActionButton';

function PostActions() {
  const navigate = useNavigate();

  const handleCommentButtonClick = () => {
    navigate('write-comment');
  };

  return (
    <P.Container>
      <LikeButton isLiked={false} />
      <P.ButtonsContainer>
        {/* Todo: 오퍼 게시물 시에만 댓글쓰기 버튼 보여주기 */}
        <ActionButton onClick={handleCommentButtonClick}>댓글쓰기</ActionButton>
        <BlueButton>채팅하기</BlueButton>
      </P.ButtonsContainer>
    </P.Container>
  );
}

export default PostActions;
