import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPricePost } from '@/store/slices/CreatePostSlice';
import ProcessCompo from '@components/WriteComment/CreatePost/ProcessCompo/ProcessCompo';
import expect_price from '@Assets/offer/Write-comment/[Progress]expect_price.svg';
import * as P from "./Progress4Styles";

const Progress4 = () => {
  const fixedMinPrice = 0;
  const fixedMaxPrice = 500000; // 오퍼 금액 + 100%;
  const priceGap = 0; // 최소 가격 차
  const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice); // 현재 최소값
  const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice); // 현재 최대값
  const dispatch = useDispatch(); 
  const  currentPrice = (p:number) => p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 화폐 단위 표시(,)

  //* 최소값 가져오기
  const prcieRangeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeMinValue(parseInt(e.target.value));
  };

  //* 최대값 가져오기
  const prcieRangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeMaxValue(parseInt(e.target.value));
  };

  //* PriceSlide가 뒤집히지 않도록 조정한다.
  const twoRangeHandler = () => {
    if (rangeMaxValue - rangeMinValue < priceGap) {
      setRangeMaxValue(rangeMinValue + priceGap);
      setRangeMinValue(rangeMaxValue - priceGap);
    } 
  }
  
  //* 금액 바뀔 때마다 dispatch 동기화
  useEffect(() => {
    dispatch(setPricePost([currentPrice(rangeMinValue), '~', currentPrice(rangeMaxValue)]))     
  }, [rangeMinValue, rangeMaxValue])

  return (
    <>
      <ProcessCompo
        n={4}
        ProgessIcon={expect_price}
        text={["예상 가격대 책정", "물품의 예상 가격대를 말씀해주세요.", "제품 상태를 판단하는 데에 도움이 됩니다."]}
        disabled={false}
        price={[currentPrice(rangeMinValue), '~', currentPrice(rangeMaxValue)]}
        />
      <P.Container>
        <P.PriceSlide>
          <P.PriceSlideBarInner
            $left={(rangeMinValue / fixedMaxPrice) * 100} // 최소값 %
            $right={100 - (rangeMaxValue / fixedMaxPrice) * 100} // 최대값 %
          />
          <P.PriceRangeWrap>
            <P.PriceRangeMin
              type='range'
              min={fixedMinPrice}
              max={fixedMaxPrice - priceGap}
              step="1000"
              value={rangeMinValue}
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
              value={rangeMaxValue}
              onChange={((e) => {
                prcieRangeMaxValueHandler(e);
                twoRangeHandler();
              })}
              />
          </P.PriceRangeWrap>
        </P.PriceSlide>
        <P.PriceTag>
          <div>{currentPrice(fixedMinPrice)}</div>
          <div>{currentPrice(fixedMaxPrice)}</div>
        </P.PriceTag>
      </P.Container>
    </>
  );
};

export default Progress4;