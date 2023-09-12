import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setProvidePost, setExchangePost, setAbleTimePost, setDeadlinePost } from '@/store/slices/WritePostSlice';
import { RootState } from '@store/types';
import PostSection from '@/components/WritePost/PostSection';
import MultiImageUpload from '@/components/WritePost/MultiImageUpload';
import SelectBox from '@components/WritePost/SelectBox';
import useNavigateButton from '@hooks/useNavigateButton';
import Calender from '@/components/WritePost/Calendar';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';
import * as O from '../WritePostType';

const renderPostSection = (
  label: string,
  placeholder: string,
  option: string,
  isChange: boolean,
  dispatchType: any,
  direction?: string,
  ) => (
    <PostSection label={label}>
      <SelectBox
        placeholder={placeholder}
        option={option}
        isChange={isChange}
        dispatchType={dispatchType}
        direction={direction}
        />
    </PostSection>
); 

const SelectElement = () => {
  const dispatch = useDispatch();
  const { exchangeType, tradeType } = useParams();
  const selectImage = useSelector((state: RootState) => state.WritePost.image);
  const selectProvide = useSelector((state: RootState) => state.WritePost.provide);
  const selectExchange = useSelector((state: RootState) => state.WritePost.exchange);
  const selectdeadline = useSelector((state: RootState) => state.WritePost.deadline);
  const selectAbleTime = useSelector((state: RootState) => state.WritePost.ableTime);
  const pageType = exchangeType === 'talent-trade' ? '재능' : '물물';
  let [inintialValueP, inintialValueE, inintialValuT] = [`제공할 ${pageType} 선택`, `교환할 ${pageType} 선택`, '거래 가능 시간 선택'];
  const enable = (inintialValueP !== selectProvide) && (inintialValueE !== selectExchange) && (inintialValuT !== selectAbleTime) && (selectImage.length > 0);

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
          <MultiImageUpload />
        </PostSection>
        {renderPostSection(`${inintialValueP.slice(0, 6)} 카테고리`, selectProvide, pageType === '재능' ? 'TalentOptions' : 'ObjectOptions', (inintialValueP !== selectProvide), setProvidePost)}
        {renderPostSection(`${inintialValueE.slice(0, 6)} 카테고리`, selectExchange, pageType === '재능' ? 'TalentOptions' : 'ObjectOptions', (inintialValueE !== selectExchange), setExchangePost)}
        <PostSection label={'거래 마감일'}>
          <Calender
            dispatchType={setDeadlinePost}
            selectdeadline={selectdeadline}
          />
        </PostSection>
        {renderPostSection('거래 가능 시간', selectAbleTime, 'TimeOptions', (inintialValuT !== selectAbleTime), setAbleTimePost, 'up')}
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