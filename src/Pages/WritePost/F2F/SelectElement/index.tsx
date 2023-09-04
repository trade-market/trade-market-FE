import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setProvidePost, setExchangePost, setAbleTimePost, } from '@/store/slices/WriteF2FPostSlice';
import { RootState } from '@store/types';
import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import BlueButton from '@components/common/Buttons/BlueButton';
import PostSection from '@/components/WritePost/PostSection';
import SelectBox from '@components/WritePost/SelectBox';
import useNavigateButton from '@hooks/useNavigateButton';
import * as O from '../F2FStyles';
import { useEffect } from 'react';

const SelectElement = () => {
  const dispatch = useDispatch();
  const { type } = useParams();
  const selectProvide = useSelector((state: RootState) => state.WriteF2FPost.provide);
  const selectExchange = useSelector((state: RootState) => state.WriteF2FPost.exchange);
  const selectAbleTime = useSelector((state: RootState) => state.WriteF2FPost.ableTime);
  const [inintialValueP, inintialValueE, inintialValuT] = ['제공할 재능 선택', '교환할 재능 선택', '거래 가능 시간 선택'];
  const enable = (inintialValueP !== selectProvide) && (inintialValueE !== selectExchange) && (inintialValuT !== selectAbleTime);

  const renderPostSection = (
    label: string,
    placeholder: string,
    option: number,
    isChange: boolean,
    selectDispatch: (e: React.MouseEvent<HTMLElement>) => void,
    ) => (
      <PostSection label={label}>
        <SelectBox
          placeholder={placeholder}
          option={option}
          isChange={isChange}
          selectDispatch={selectDispatch}
          />
      </PostSection>
  ); 

  const handleOnChangeSelectValue = ((dispatchType : any) => {
    return (e: React.MouseEvent<HTMLElement>) => {
      const event = e.target as HTMLElement;
      dispatch(dispatchType(event.innerText));
    }
  })

  const handleNextButtonClick = useNavigateButton(`/write-post/${type}/one-on-one/write-content`);

  useEffect(() => { //* 선택된 요소가 없다면 기본 placeHolder 값 부여
    if (selectProvide === '') {
      dispatch(setProvidePost(inintialValueP));
      dispatch(setExchangePost(inintialValueE));
      dispatch(setAbleTimePost(inintialValuT));
    }
    
  }, [])

  return (
    <>
      <O.Container>
        {renderPostSection('제공할 재능 카테고리', selectProvide, 0, (inintialValueP !== selectProvide), handleOnChangeSelectValue(setProvidePost))}
        {renderPostSection('교환할 재능 카테고리', selectExchange, 0, (inintialValueE !== selectExchange), handleOnChangeSelectValue(setExchangePost))}
        {renderPostSection('거래 가능 시간', selectAbleTime, 2, (inintialValuT !== selectAbleTime), handleOnChangeSelectValue(setAbleTimePost))}
      </O.Container>  
      {/*  */}
      <BottomBtnSection>
        <BlueButton
          maxWidth="100%"
          disabled={true && !enable}
          onClick={handleNextButtonClick}
        >
        다음
        </BlueButton>
      </BottomBtnSection>
    </>
  );
};

export default SelectElement;