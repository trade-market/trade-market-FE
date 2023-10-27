import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import { setMinPricePost, setMaxPricePost } from '@/store/slices/CreateCommentSlice';
import ProcessCompo from '@components/WriteComment/CreatePost/ProcessCompo/ProcessCompo';
import expect_price from '@Assets/offer/Write-comment/[Progress]expect_price.svg';
import PriceSlideBar from '@/components/WriteComment/CreatePost/PriceSlideBar/PriceSlideBar';
import { Container } from "./Progress4Styles";

const Progress4 = () => {
  const selectMinPrice = useSelector((state: RootState) => state.createComment.minPrice);
  const selectMaxPrice = useSelector((state: RootState) => state.createComment.maxPrice);
  return (
    <>
      <ProcessCompo
        n={4}
        ProgessIcon={expect_price}
        text={["예상 가격대 책정", "물품의 예상 가격대를 말씀해주세요.", "제품 상태를 판단하는 데에 도움이 됩니다."]}
        disabled={false}
        />
      <Container>
        <PriceSlideBar
          fixedMinValue={0}
          fixedMaxValue={500000}
          priceGapValue={0}
          selectMinPriceValue={selectMinPrice}
          selectMaxPriceValue={selectMaxPrice}
          setMinPriceValue={setMinPricePost}
          setMaxPriceValue={setMaxPricePost}
        />
      </Container>
    </>
  );
};

export default Progress4;