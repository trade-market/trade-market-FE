import styled from 'styled-components';
import TradeIcon from '@/Assets/Icons/MyPage/교환.svg';
import OfferIcon from '@/Assets/Icons/MyPage/오퍼.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 110px;
  width: 100%;
  cursor: pointer;

  .title {
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .trade-icon {
    width: 16px;
    height: 16px;
  }

  .category {
    color: ${({ theme }) => theme.color.orange};
    font-weight: 500;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 4px;

  .thumbnail {
    width: 100%;
    height: 110px;
    border-radius: 8px;
  }

  .offer-icon {
    position: absolute;
    top: 4px;
    left: 4px;
  }
`;

interface IRecentlyViewedPostProps {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
}

function RecentlyViewedPost({
  id,
  thumbnail,
  title,
  category,
}: IRecentlyViewedPostProps) {
  // Todo: props로 받아온 게시글 정보를 이용해 렌더링
  // Todo: 1:1 게시물인 경우에도 재사용 가능하게 변경 (디자인 필요)
  // Todo: 게시글 클릭 시 해당 게시글(id)로 이동
  return (
    <Container>
      <ImageContainer>
        <img className="thumbnail" src={thumbnail} alt="productImg" />
        <img className="offer-icon" src={OfferIcon} alt="offerIcon" />
      </ImageContainer>
      <div className="title">{title}</div>
      <img className="trade-icon" src={TradeIcon} alt="tradeIcon" />
      <div className="category">{category}</div>
    </Container>
  );
}

export default RecentlyViewedPost;
