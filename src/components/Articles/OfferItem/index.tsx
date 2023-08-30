import * as O from './OfferItemStyles';
import RatingBadge from '@/components/common/RatingBadge';
import optionDot from '@Assets/offer/Detailed-page/option_dot.svg';
import linkIcon from '@Assets/offer/Detailed-page/link.svg';
import BigTitle from '@/components/common/BigTitle';
import useTimeDiff from '@hooks/useTimeDiff';
import { OfferTypes } from '@components/Articles/OfferItemLists';

function OfferItem({
  profileImg,
  nickname,
  location,
  rating,
  title,
  category,
  createdAt,
  price,
  text,
  isOriginalPost,
}: OfferTypes) {
  const timeDifference = useTimeDiff(createdAt);

  return (
    <O.Container>
      <O.ProfileContainer>
        <div className="left">
          <img src={profileImg} alt="프로필 이미지" className="profile-img" />
          <div className="info">
            <div className="name-wrap">
              <span>{nickname}</span> <RatingBadge rating={rating} />
            </div>
            <div className="town-date">
              {location} · {timeDifference}
            </div>
          </div>
        </div>
        <div className="right">
          {isOriginalPost && <img src={linkIcon} alt="링크아이콘" />}
          <img src={optionDot} alt="옵션" />
        </div>
      </O.ProfileContainer>
      <O.ProductInfoContainer>
        <img
          src="https://www.a-m.co.kr/news/photo/202202/603633_4408_253.jpg"
          alt="프로필 이미지"
          className="product-img"
        />
        <div className="product-contents">
          <div className="top">
            <div className="title">
              <BigTitle>{title}</BigTitle>
              <div className="category">{category}</div>
            </div>
            <div className="price">{price}</div>
          </div>
          <div className="bottom">{text}</div>
        </div>
      </O.ProductInfoContainer>
    </O.Container>
  );
}

export default OfferItem;
