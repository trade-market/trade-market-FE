import RatingBadge from '@/components/common/RatingBadge';
import * as W from './WriterProfileStyles';

interface IWriterInfoProps {
  profileImg: string;
  nickname: string;
  location: string;
}

function WriterInfo({ profileImg, nickname, location }: IWriterInfoProps) {
  return (
    <W.Container>
      <W.ProfileImg src={profileImg} />
      <W.TextContainer>
        <W.NameContainer>
          <W.Nickname>{nickname}</W.Nickname>
          <RatingBadge rating={3} />
        </W.NameContainer>
        <W.Location>{location}</W.Location>
      </W.TextContainer>
    </W.Container>
  );
}

export default WriterInfo;
