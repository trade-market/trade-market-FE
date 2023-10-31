import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
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
import defaultCharacterImg from '@Assets/Character_Icons/Character_circle.svg';
import ConfirmModal from '@components/common/ConfirmModal';
import ChatToOfferedUserContainer from '@components/Articles/ChatToOfferedUserContainer';
import ProductImagesContainer from '@components/Articles/ProductImagesContainer';

// 더미데이터
const offers: OfferPostTypes[] = [
  {
    id: '1',
    userId: '123',
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
    id: '2',
    userId: '123321',
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
    id: '3',
    userId: '3213',
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
];

function Articles() {
  const navigate = useNavigate();
  const { isOpen, open, close } = useModal();
  const {
    isOpen: isDeleteModalOpen,
    open: deleteModalOpen,
    close: deleteModalClose,
  } = useModal();
  const {
    isOpen: isChatToOfferedUserModalOpen,
    open: chatToOfferedUserModalOpen,
    close: chatToOfferedUserModalClose,
  } = useModal();
  const timeDifference = useTimeDiff(new Date('2023-08-08T23:00:00')); // Todo: createdAt으로 변경
  const { id } = useParams();

  const [isOfferPost, setIsOfferPost] = useState(false); // Todo: API 명세서 나오면 수정 필요 (1:1, offerPost 구분)
  const isOwner = true; // Todo: API 명세서 나오면 수정 필요 (게시글 작성자 id와 로그인된 id로 구분)

  const handleDeletePost = () => {
    navigate('/', { replace: true });
  };

  // 1:1 거래일 시 채팅하기 버튼 클릭 시
  const handleDirectChatInitiation = () => {};

  // Todo: id를 통해 해당 게시글 정보 가져오기
  useEffect(() => {
    // 더미데이터: 임시 id로 짝수면 오퍼 게시글, 홀수면 1:1 게시글
    if (Number(id) % 2 === 0) {
      setIsOfferPost(true);
    }
  }, []);

  //Todo : 게시글 정보 --> 수정게시물에 props로 전달
  const ProductInfoData = {
    exChangeType: '물물',
    isOfferPost: isOfferPost, //오퍼 혹은 1:1;
    title: '여성용 나비 선글라스',
    category: '의류',
    deadLine: '2023년 08월 17일',
    desiredCategory: '의류',
    tradeTime: '오전(09시~12시)',
    price: [21000, 24000],
    description: '2년 간 사용했고, 기스가 좀 있습니다.',
  };

  const dumyImages = [
    'https://health.chosun.com/site/data/img_dir/2021/06/08/2021060801363_0.jpg',
    'https://health.chosun.com/site/data/img_dir/2021/06/08/2021060801363_0.jpg',
  ];

  return (
    <>
      <CommonHeader visibleOption={isOwner} optionClick={open}>
        상세 페이지
      </CommonHeader>
      <A.Container>
        {dumyImages.length > 0 && (
          <ProductImagesContainer images={dumyImages} />
        )}
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
            deadLine="2023년 08월 17일"
            desiredCategory="의류"
            tradeTime="오전(09시~12시)"
            price="21,000~24,000"
            description="2년 간 사용했고, 기스가 좀 있습니다."
          />
          <LikeAndComment likeCount="3" commentCount="3" />
          {isOfferPost && <OfferItemLists offers={offers} isOwner={isOwner} />}
        </A.ContentsContainer>
      </A.Container>
      <PostActionButtons
        isOfferPost={isOfferPost}
        isOwner={isOwner}
        onChatButtonClick={
          isOfferPost ? chatToOfferedUserModalOpen : handleDirectChatInitiation
        } // 오퍼 게시물 일때 채팅하기 버튼 클릭 시 모달 오픈, 1:1 게시물 일때 채팅하기 버튼 클릭 시 바로 채팅방으로 이동
      />
      {isOpen && (
        <BottomSheet height={'200px'} onClick={close}>
          {/* Todo: 수정, 삭제 기능 추가 해야함 */}
          <A.CorrectionButton
            onClick={() =>
              navigate(`edit/select-element`, { state: ProductInfoData })
            }
          >
            게시물 수정
          </A.CorrectionButton>
          <A.DeleteButton
            onClick={() => {
              close();
              deleteModalOpen();
            }}
          >
            삭제
          </A.DeleteButton>
        </BottomSheet>
      )}
      <ChatToOfferedUserContainer
        offers={offers}
        isOpen={isChatToOfferedUserModalOpen}
        modalClose={chatToOfferedUserModalClose}
      />
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="게시물 삭제"
        content="게시물을 삭제하시겠습니까?"
        confirmedContent="게시물이 삭제되었습니다."
        onFinalOkClick={handleDeletePost}
        closeAction={deleteModalClose}
      />
    </>
  );
}

export default Articles;
