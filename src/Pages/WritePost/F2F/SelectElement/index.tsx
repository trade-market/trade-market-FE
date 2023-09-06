import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setProvidePost, setExchangePost, setAbleTimePost, setDeadlinePost } from '@/store/slices/WriteF2FPostSlice';
import { RootState } from '@store/types';
import PostSection from '@/components/WritePost/PostSection';
import MultiImageUpload from '@/components/WritePost/MultiImageUpload';
import SelectBox from '@components/WritePost/SelectBox';
import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import BlueButton from '@components/common/Buttons/BlueButton';
import useNavigateButton from '@hooks/useNavigateButton';
import Calender from '@/components/WritePost/Calendar';
import * as O from '../F2FStyles';

const renderPostSection = (
  label: string,
  placeholder: string,
  option: number,
  isChange: boolean,
  dispatchType: any,
  ) => (
    <PostSection label={label}>
      <SelectBox
        placeholder={placeholder}
        option={option}
        isChange={isChange}
        dispatchType={dispatchType}
        />
    </PostSection>
); 

const SelectElement = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const selectImage = useSelector((state: RootState) => state.WriteF2FPost.image);
  const selectProvide = useSelector((state: RootState) => state.WriteF2FPost.provide);
  const selectExchange = useSelector((state: RootState) => state.WriteF2FPost.exchange);
  const selectdeadline = useSelector((state: RootState) => state.WriteF2FPost.deadline);
  const selectAbleTime = useSelector((state: RootState) => state.WriteF2FPost.ableTime);
  const pageType = type === 'talent-trade' ? '재능' : '물물';
  let [inintialValueP, inintialValueE, inintialValuT] = [`제공할 ${pageType} 선택`, `교환할 ${pageType} 선택`, '거래 가능 시간 선택'];
  const enable = (inintialValueP !== selectProvide) && (inintialValueE !== selectExchange) && (inintialValuT !== selectAbleTime);

  const handleNextButtonClick = useNavigateButton(`/write-post/${type}/one-on-one/write-content`);

  useEffect(() => { //* 선택된 요소가 없다면 기본 placeHolder 값 부여
    if (selectProvide === '') {
      dispatch(setProvidePost(inintialValueP));
      dispatch(setExchangePost(inintialValueE));
      dispatch(setAbleTimePost(inintialValuT));
    }
  }, [type]);

  return (
    <>
      <O.Container>
        <PostSection label={'사진 업로드'}>
          <MultiImageUpload />
        </PostSection>
        {renderPostSection(`${inintialValueP.slice(0, 6)} 카테고리`, selectProvide, pageType === '재능' ? 0 : 1, (inintialValueP !== selectProvide), setProvidePost)}
        {renderPostSection(`${inintialValueE.slice(0, 6)} 카테고리`, selectExchange, pageType === '재능' ? 0 : 1, (inintialValueE !== selectExchange), setExchangePost)}
        <PostSection label={'거래 마감일'}>
          <Calender
            dispatchType={setDeadlinePost}
            selectdeadline={selectdeadline}
          />
        </PostSection>
        {renderPostSection('거래 가능 시간', selectAbleTime, 2, (inintialValuT !== selectAbleTime), setAbleTimePost)}
      </O.Container>  
      <BottomBtnSection>
        <BlueButton
          maxWidth="100%"
          disabled={true && !enable}
          onClick={handleNextButtonClick}
          >다음
        </BlueButton>
      </BottomBtnSection>
    </>
  );
};

export default SelectElement;