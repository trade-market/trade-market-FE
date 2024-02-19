import {
  setAbleTimePost,
  setExchangePost,
  setProvidePost,
} from '@/store/slices/WritePostSlice';
import * as O from '@Pages/WritePost/01-PostOutlet/styles';
import Calender from '@components/WritePost/03-SelectPostOptions/Calendar/Calender';
import MultiImageUpload from '@components/WritePost/03-SelectPostOptions/MultiImageUpload/MultiImageUpload';
import SelectBox from '@components/WritePost/03-SelectPostOptions/SelectBox/SelectBox';
import PostBlueButtons from '@components/WritePost/_commons/PostBlueButtons/PostBlueButtons';
import PostSection from '@components/WritePost/_commons/PostSection/PostSection';
import { useAppDispatch, useAppSelector } from '@store/store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface AllSelectElementsProps {
  open?: () => void;
  handleNextButtonClick: () => void;
  EditPostData?: any;
}

const AllSelectElements = ({
  open,
  handleNextButtonClick,
  EditPostData,
}: AllSelectElementsProps) => {
  const dispatch = useAppDispatch();
  const { exchangeType, tradeType } = useParams();
  const pageType = EditPostData
    ? EditPostData['exChangeType']
    : exchangeType === 'talent-trade'
    ? '재능'
    : '물물';
  const [inintialValueP, inintialValueE, inintialValuT] = [
    `제공할 ${pageType} 선택`,
    `교환할 ${pageType} 선택`,
    '거래 가능 시간 선택',
  ];
  const selectProvide = useAppSelector((state) => state.WritePost.provide);
  const selectExchange = useAppSelector((state) => state.WritePost.exchange);
  const selectdeadline = useAppSelector((state) => state.WritePost.deadline);
  const selectAbleTime = useAppSelector((state) => state.WritePost.ableTime);

  const enable =
    inintialValueP !== selectProvide &&
    inintialValueE !== selectExchange &&
    inintialValuT !== selectAbleTime;

  const handleOnChangeSelectValue = (dispatchType) => {
    return (e: React.MouseEvent<HTMLElement>) => {
      const event = e.target as HTMLElement;
      dispatch(dispatchType(event.innerText));
    };
  };

  useEffect(() => {
    //* type(주소)에 따라 초기값 변경
    dispatch(setProvidePost(inintialValueP));
    dispatch(setExchangePost(inintialValueE));
    dispatch(setAbleTimePost(inintialValuT));
  }, [exchangeType, tradeType]);

  useEffect(() => {
    //* 수정 게시물일 경우, 전달 받은 데이터를 초기값으로 변경
    if (EditPostData) {
      dispatch(setProvidePost(EditPostData['category']));
      dispatch(setExchangePost(EditPostData['desiredCategory']));
      dispatch(setAbleTimePost(EditPostData['tradeTime']));
    }
  }, []);

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
          <Calender />
        </PostSection>
        <PostSection label={'거래 가능 시간'}>
          <SelectBox
            placeholder={selectAbleTime}
            option={'abletime'}
            isChange={inintialValuT !== selectAbleTime}
            onClick={handleOnChangeSelectValue(setAbleTimePost)}
            direction="up"
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

export default AllSelectElements;
