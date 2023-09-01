import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as P from './PriceSlideBarStyles';

interface IPriceSlideBarProps {
  fixedMinValue: number;
  fixedMaxValue: number; // 오퍼 금액 + 100%;
  priceGapValue: number; // 최소 가격 차
  selectMinPriceValue: number ; // 선택된 최소 금액
  selectMaxPriceValue: number; // 선택된 최대 금액
  setMinPriceValue: any; // 최소 금액 갱신 함수
  setMaxPriceValue: any; // 최대 금액 갱신 함수
}

const PriceSlideBar = ({fixedMinValue, fixedMaxValue, priceGapValue, selectMinPriceValue, selectMaxPriceValue, setMinPriceValue, setMaxPriceValue} : IPriceSlideBarProps ) => {
  const dispatch = useDispatch(); 
  const currentPrice = (p: number) => p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 화폐 단위 표시(,)

  //* 최소값 가져오기
  const prcieRangeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinPriceValue(parseInt(e.target.value)));
  };

  //* 최대값 가져오기
  const prcieRangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxPriceValue(parseInt(e.target.value)));
  };

  //* PriceSlide가 뒤집히지 않도록 조정한다.
  const twoRangeHandler = () => {
    if (selectMaxPriceValue - selectMinPriceValue < priceGapValue) {
      dispatch(setMinPriceValue(selectMinPriceValue + priceGapValue));
      dispatch(setMaxPriceValue(selectMaxPriceValue - priceGapValue));
    } 
  }
  
  //* 첫 렌더링 시 fixedPrice를 dispatch에 업데이트한다.
  useEffect(() => {
    if (selectMaxPriceValue === 0) {
      dispatch(setMinPriceValue(fixedMinValue));
      dispatch(setMaxPriceValue(fixedMaxValue));
    }
  }, [])

  const handleChange = () => {
    return [`${currentPrice(selectMinPriceValue)}~${currentPrice(selectMaxPriceValue)}`]
  };

  return (
    <>
      <P.InputContainer>
        <P.Input
          value={[`${currentPrice(selectMinPriceValue)}~${currentPrice(selectMaxPriceValue)}`]}
          disabled
        />  
        <div className="currency">원</div>
      </P.InputContainer>
      {/*  */}
      <P.PriceSlideContainer>
        <P.PriceSlide>
          <P.PriceSlideBarInner
            $left={(selectMinPriceValue / fixedMaxValue) * 100} // 최소값 %
            $right={100 - (selectMaxPriceValue / fixedMaxValue) * 100} // 최대값 %
          />
          <P.PriceRangeWrap>
            <P.PriceRangeMin
              type='range'
              min={fixedMinValue}
              max={fixedMaxValue - priceGapValue}
              step="1000"
              defaultValue={selectMinPriceValue}
              onChange={((e) => {
                prcieRangeMinValueHandler(e);
                twoRangeHandler();
              })}
              />
            <P.PriceRangeMax
              type='range'
              min={fixedMinValue + priceGapValue}
              max={fixedMaxValue}
              step="1000"
              defaultValue={selectMaxPriceValue}
              onChange={((e) => {
                prcieRangeMaxValueHandler(e);
                twoRangeHandler();
              })}
              />
          </P.PriceRangeWrap>
        </P.PriceSlide>
        {/*  */}
        <P.PriceTag>
          <div className='min'>{currentPrice(fixedMinValue)}</div>
          <div className='max'>{currentPrice(fixedMaxValue)}</div>
        </P.PriceTag>
      </P.PriceSlideContainer>
    </>
  );
};

export default PriceSlideBar;