import styled from 'styled-components';
import arrow_icon from '@Assets/Icons/arrow_right.svg';
import defaultCharacterImg from '@Assets/Character_Icons/Character_circle.svg';
import RatingBadge from '@components/common/RatingBadge';
import { GradeType } from '@/types/UserTypes';
import { useNavigate } from 'react-router-dom';

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 21px;
  box-shadow: 2px 2px 8px 0px rgba(96, 96, 96, 0.1);
  cursor: pointer;

  .arrow-icon {
    width: 24px;
    height: 24px;
  }
`;

const Left = styled.div`
  display: flex;
  gap: 8px;

  .profile-img {
    width: 48px;
    height: 48px;
    border-radius: 60px;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .top {
    display: flex;
    align-items: center;
    gap: 3px;
  }
  .nickname {
    font-size: 15px;
  }

  .location {
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.gray};
  }
`;

interface IChatToOfferedUserItemProps {
  userId: string;
  profileImg: string;
  nickname: string;
  location: string;
  rating: GradeType;
}

function ChatToOfferedUserItem({
  userId,
  profileImg,
  nickname,
  location,
  rating,
}: IChatToOfferedUserItemProps) {
  const navigate = useNavigate();

  const ChatRoomClickHandler = () => {
    navigate(`/chat-list/${userId}`, {
      state: {
        nickName: nickname
    }});
  }

  return (
    <Container
      onClick={ChatRoomClickHandler}
    >
      <Left>
        <img
          className="profile-img"
          src={profileImg ? profileImg : defaultCharacterImg}
          alt="프로필 이미지"
        />
        <TextSection>
          <div className="top">
            <span className="nickname">{nickname}</span>
            <RatingBadge rating={rating} />
          </div>
          <div className="location">{location}</div>
        </TextSection>
      </Left>
      <img src={arrow_icon} alt="화살표" />
    </Container>
  );
}

export default ChatToOfferedUserItem;
