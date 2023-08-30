import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/types';
import { setMinPricePost, setMaxPricePost } from '@/store/slices/CreatePostSlice';
import ProcessCompo from '@components/WriteComment/CreatePost/ProcessCompo/ProcessCompo';
import expect_price from '@Assets/offer/Write-comment/[Progress]expect_price.svg';
import * as P from "./Progress4Styles";

const Progress4 = () => {
  const fixedMinPrice = 0;
  const fixedMaxPrice = 500000; // 오퍼 금액 + 100%;
  const priceGap = 0; // 최소 가격 차
  const selectMinPrice = useSelector((state: RootState) => state.createPost.minPrice);
  const selectMaxPrice = useSelector((state: RootState) => state.createPost.maxPrice);
  const dispatch = useDispatch(); 
  const currentPrice = (p: number) => p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 화폐 단위 표시(,)

  //* 최소값 가져오기
  const prcieRangeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinPricePost(parseInt(e.target.value)));
  };

  //* 최대값 가져오기
  const prcieRangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxPricePost(parseInt(e.target.value)));
  };

  //* PriceSlide가 뒤집히지 않도록 조정한다.
  const twoRangeHandler = () => {
    if (selectMaxPrice - selectMinPrice < priceGap) {
      dispatch(setMaxPricePost(selectMinPrice + priceGap));
      dispatch(setMinPricePost(selectMaxPrice - priceGap));
    } 
  }
  
  //* 첫 렌더링 시 fixedPrice를 dispatch에 업데이트한다.
  useEffect(() => {
    if (selectMaxPrice === 0) {
      dispatch(setMinPricePost(fixedMinPrice));
      dispatch(setMaxPricePost(fixedMaxPrice));
    }
  }, [])

  return (
    <>
      <ProcessCompo
        n={4}
        ProgessIcon={expect_price}
        text={["예상 가격대 책정", "물품의 예상 가격대를 말씀해주세요.", "제품 상태를 판단하는 데에 도움이 됩니다."]}
        disabled={false}
        price={[currentPrice(selectMinPrice), '~', currentPrice(selectMaxPrice)]}
        />
      <P.Container>
        <P.PriceSlide>
          <P.PriceSlideBarInner
            $left={(selectMinPrice / fixedMaxPrice) * 100} // 최소값 %
            $right={100 - (selectMaxPrice / fixedMaxPrice) * 100} // 최대값 %
          />
          <P.PriceRangeWrap>
            <P.PriceRangeMin
              type='range'
              min={fixedMinPrice}
              max={fixedMaxPrice - priceGap}
              step="1000"
              value={selectMinPrice}
              onChange={((e) => {
                prcieRangeMinValueHandler(e);
                twoRangeHandler();
              })}
              />
            <P.PriceRangeMax
              type='range'
              min={fixedMinPrice + priceGap}
              max={fixedMaxPrice}
              step="1000"
              value={selectMaxPrice}
              onChange={((e) => {
                prcieRangeMaxValueHandler(e);
                twoRangeHandler();
              })}
              />
          </P.PriceRangeWrap>
        </P.PriceSlide>
        <P.PriceTag>
          <div className='min'>{currentPrice(fixedMinPrice)}</div>
          <div className='max'>{currentPrice(fixedMaxPrice)}</div>
        </P.PriceTag>
      </P.Container>
    </>
  );
};

export default Progress4;