import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import {  setProvidePost, setExchangePost, setAbleTimePost, setDeadlinePost } from '@/store/slices/WritePostSlice';
import { RootState } from '@store/types';
import PostSection from '@/components/WritePost/PostSection';
import MultiImageUpload from '@components/WritePost/MultiImageUpload/MultiImageUpload';
import SelectBox from '@components/WritePost/SelectBox';
import useNavigateButton from '@hooks/useNavigateButton';
import Calender from '@/components/WritePost/Calendar';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';
import * as O from '../WritePostType';

interface ISelectElementOutletProps {
  open: () => void
}

const SelectElement = () => {
  const dispatch = useDispatch();
  const { exchangeType, tradeType } = useParams();
  const { open } = useOutletContext<ISelectElementOutletProps>();
  const selectProvide = useSelector((state: RootState) => state.WritePost.provide);
  const selectExchange = useSelector((state: RootState) => state.WritePost.exchange);
  const selectdeadline = useSelector((state: RootState) => state.WritePost.deadline);
  const selectAbleTime = useSelector((state: RootState) => state.WritePost.ableTime);
  const pageType = exchangeType === 'talent-trade' ? '재능' : '물물';
  let [inintialValueP, inintialValueE, inintialValuT] = [`제공할 ${pageType} 선택`, `교환할 ${pageType} 선택`, '거래 가능 시간 선택'];
  const enable = (inintialValueP !== selectProvide) && (inintialValueE !== selectExchange) && (inintialValuT !== selectAbleTime);

  const handleOnChangeSelectValue = ((dispatchType: any) => {
    return (e: React.MouseEvent<HTMLElement>) => {
      const event = e.target as HTMLElement;
      dispatch(dispatchType(event.innerText));
    }
  });

  const handleNextButtonClick = useNavigateButton(`/write-post/${exchangeType}/${tradeType}/write-content`);

  useEffect(() => { //* type(주소)에 따라 초기값 변경
    dispatch(setProvidePost(inintialValueP));
    dispatch(setExchangePost(inintialValueE));
    dispatch(setAbleTimePost(inintialValuT));
  }, [exchangeType, tradeType]);

  return (
    <>
      <O.Container>
        <PostSection label={'사진 업로드'}>
          <MultiImageUpload open={open} />
        </PostSection>
        <PostSection label={`${inintialValueP.slice(0, 6)} 카테고리`}>
          <SelectBox
            placeholder={selectProvide}
            option={pageType === '재능' ? 'talent' : 'object'}
            isChange={inintialValueP !== selectProvide}
            onClick={handleOnChangeSelectValue(setProvidePost)}
            />
        </PostSection>
        <PostSection label={`${inintialValueE.slice(0, 6)} 카테고리`}>
          <SelectBox
            placeholder={selectExchange}
            option={pageType === '재능' ? 'talent' : 'object'}
            isChange={inintialValueE !== selectExchange}
            onClick={handleOnChangeSelectValue(setExchangePost)}
            />
        </PostSection>
        <PostSection label={'거래 마감일'}>
          <Calender
            onChange={date => dispatch(setDeadlinePost(date))}
            selectdeadline={selectdeadline}
          />
        </PostSection>
        <PostSection label={'거래 가능 시간'}>
          <SelectBox
            placeholder={selectAbleTime}
            option={'abletime'}
            isChange={inintialValuT !== selectAbleTime}
            onClick={handleOnChangeSelectValue(setAbleTimePost)}
            direction='up'
            />
        </PostSection>
      </O.Container>  
      <PostBlueButtons
        option={1}
        disabled={true && !enable}
        BlueButtonClickHandler={handleNextButtonClick}
      />
    </>
  );
};

export default SelectElement;