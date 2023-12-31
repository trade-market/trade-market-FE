import RatingBadge from '@/components/common/RatingBadge';
import * as W from './WriterProfileStyles';
import { GradeType } from '@/types/UserTypes';

interface IWriterProfileProps {
  profileImg: string;
  nickname: string;
  location: string;
  rating: GradeType;
}

function WriterProfile({
  profileImg,
  nickname,
  location,
  rating,
}: IWriterProfileProps) {
  return (
    <W.Container>
      <W.ProfileImg src={profileImg} />
      <W.TextContainer>
        <W.NameContainer>
          <W.Nickname>{nickname}</W.Nickname>
          <RatingBadge rating={rating} />
        </W.NameContainer>
        <W.Location>{location}</W.Location>
      </W.TextContainer>
    </W.Container>
  );
}

export default WriterProfile;
