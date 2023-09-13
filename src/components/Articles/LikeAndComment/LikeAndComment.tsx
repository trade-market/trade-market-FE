import styled from 'styled-components';
import likeIcon from '@Assets/Icons/Home/Post/Icon_like.svg';
import unLikeIcon from '@Assets/Icons/Home/Post/Icon_unlike.svg';
import commentIcon from '@Assets/offer/Detailed-page/comments.svg';

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.font.size.small};

  .section {
    display: flex;
    align-items: center;
  }

  .icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

interface ILikeAndCommentProps {
  likeCount: string;
  commentCount: string;
}

function LikeAndComment({ likeCount, commentCount }: ILikeAndCommentProps) {
  // Todo: 좋아요 클릭시 이벤트 추가 필요, 좋아요 여부에 따라 이미지 변경 필요
  return (
    <ActionContainer>
      <div className="section">
        <img className="icon" src={unLikeIcon} alt="좋아요" />
        <span>좋아요 {likeCount}</span>
      </div>
      <div className="section">
        <img className="icon" src={commentIcon} alt="답글" />
        <span>답글 {commentCount}</span>
      </div>
    </ActionContainer>
  );
}

export default LikeAndComment;
