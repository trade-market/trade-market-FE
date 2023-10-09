import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as A from './ArticlesStyles';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import WriterProfile from '@/components/Articles/WriterProfile';
import ProductInfo from '@components/Articles/ProductInfo';
import PostActionButtons from '@components/Articles/PostActionButtons.tsx';
import LikeAndComment from '@/components/Articles/LikeAndComment';
import OfferItemLists from '@/components/Articles/OfferItemLists';
import useTimeDiff from '@/hooks/useTimeDiff';
import BottomSheet from '@/components/common/BottomSheet';
import useModal from '@hooks/useModal';
import { OfferPostTypes } from '@/types/OfferTypes';
import defaultCharacterImg from '@Assets/Character_Icons/Character_basic_ 30_30 ver.svg';

// 더미데이터
const offers = [
  {
    profileImg: 'https://www.a-m.co.kr/news/photo/202202/603633_4408_253.jpg',
    nickname: '용',
    location: '한강로동',
    rating: 'two',
    title: '선글라스',
    category: '의류',
    createdAt: new Date('2023-08-29T21:24:00'),
    price: '21,000~24,000',
    text: '(본문) 선글라스와 교환하신다고 하면 다른 물건도 얹어드릴 수 있습니다.',
    isOriginalPost: true,
  },
  {
    profileImg: '',
    nickname: '거래왕',
    location: '신사동',
    rating: 'one',
    title: '선글라스',
    category: '의류',
    createdAt: new Date('2023-08-26T22:24:00'),
    price: '11,000~24,000',
    text: '(본문) 교환해요',
    isOriginalPost: false,
  },
  {
    profileImg: 'https://www.a-m.co.kr/news/photo/202202/603633_4408_253.jpg',
    nickname: '용',
    location: '한강로동',
    rating: 'three',
    title: '선글라스',
    category: '의류',
    createdAt: new Date('2023-08-29T21:24:00'),
    price: '21,000~24,000',
    text: '(본문) 선글라스와 교환하신다고 하면 다른 물건도 얹어드릴 수 있습니다.',
    isOriginalPost: true,
    // isOriginalPost를 통해 원글인지 댓글인지 구분 하는데, API명세서가 나오면 수정 필요 (post id 여부로 판별?)
  },
] as OfferPostTypes[];

function Articles() {
  const { isOpen, open, close } = useModal();
  const timeDifference = useTimeDiff(new Date('2023-08-08T23:00:00')); // Todo: createdAt으로 변경
  const { id } = useParams();

  const [isOfferPost, setIsOfferPost] = useState(false); // Todo: API 명세서 나오면 수정 필요 (1:1, offerPost 구분)

  // Todo: id를 통해 해당 게시글 정보 가져오기
  useEffect(() => {
    // 더미데이터: 임시 id로 짝수면 오퍼 게시글, 홀수면 1:1 게시글
    if (Number(id) % 2 === 0) {
      setIsOfferPost(true);
    }
  }, []);

  return (
    <>
      <CommonHeader visibleOption optionClick={open}>
        상세 페이지
      </CommonHeader>
      <A.Container>
        {/* Todo: Image slide 적용?  글쓰기시 사진 한장인지 여러장인지 확인 필요*/}
        <A.ProductImage src="https://health.chosun.com/site/data/img_dir/2021/06/08/2021060801363_0.jpg" />
        <A.ContentsContainer>
          <WriterProfile
            profileImg={defaultCharacterImg} // Todo: ImgSrc가 있으면 해당 이미지 아니면 기본 이미지
            nickname="동그란 딸기"
            location="한강로동"
            rating="three"
          />
          <ProductInfo
            title="여성용 나비 선글라스"
            category="의류"
            uploadTime={timeDifference}
            daedline="08월 17일"
            desiredCategory="의류"
            tradeTime="오전(09시~12시)"
            price="21,000~24,000"
            description="2년 간 사용했고, 기스가 좀 있습니다."
          />
          <LikeAndComment likeCount="3" commentCount="3" />
          {isOfferPost && <OfferItemLists offers={offers} />}
        </A.ContentsContainer>
      </A.Container>
      <PostActionButtons isOfferPost={isOfferPost} isOwner={true} />
      {isOpen && (
        <BottomSheet height={'200px'} onClick={close}>
          {/* Todo: 수정, 삭제 기능 추가 해야함 */}
          <A.CorrectionButton>게시물 수정</A.CorrectionButton>
          <A.DeleteButton>삭제</A.DeleteButton>
        </BottomSheet>
      )}
    </>
  );
}

export default Articles;
