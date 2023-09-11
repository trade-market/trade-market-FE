import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '@store/types';
import { setTitlePost, setContentPost, setMinPricePost, setMaxPricePost } from '@/store/slices/WriteF2FPostSlice';
import BlueTextArea from '@/components/WriteComment/CreatePost/BlueTextArea';
import PostSection from '@/components/WritePost/PostSection';
import PriceSlideBar from '@/components/WriteComment/CreatePost/PriceSlideBar/PriceSlideBar';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';
import * as O from '../WritePostType';

const WriteContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type } = useParams();
  const selectTitle = useSelector((state: RootState) => state.WriteF2FPost.title);
  const selectContent = useSelector((state: RootState) => state.WriteF2FPost.content);
  const selectMinPrice = useSelector((state: RootState) => state.WriteF2FPost.minPrice);
  const selectMaxPrice = useSelector((state: RootState) => state.WriteF2FPost.maxPrice);

  useEffect(() => { //* type(주소)에 따라 초기값 변경
    dispatch(setTitlePost(''));
    dispatch(setContentPost(''));
    dispatch(setMinPricePost(0));
    dispatch(setMaxPricePost(2_000_000));
  }, [type]);

  return (
    <>
    <O.Container>
      <PostSection label={'제목'}>
        <BlueTextArea
          placeholder={'제목을 입력해주세요. (최대 50자)'}
          value={selectTitle}
          maxLength={50}
          dispatchType={setTitlePost}
          maxHeight={'60px'}
          />
      </PostSection>
      <PostSection label={'내용'}>
        <BlueTextArea
          placeholder={'작성글을 적어주세요. (최대 500자)'}
          value={selectContent}
          maxLength={500}
          dispatchType={setContentPost}
          />
        </PostSection>
        <PostSection label={'가격 제안'}>
          <O.PriceSlideContainer>
            <PriceSlideBar
              fixedMinValue={0}
              fixedMaxValue={2_000_000}
              priceGapValue={0}
              selectMinPriceValue={selectMinPrice}
              selectMaxPriceValue={selectMaxPrice}
              setMinPriceValue={setMinPricePost}
              setMaxPriceValue={setMaxPricePost}
              />
          </O.PriceSlideContainer>
        </PostSection>
    </O.Container>
      <PostBlueButtons
      option={2}
      disabled={selectTitle.length === 0 || selectContent.length === 0}
      BlueButtonClickHandler={() => navigate(`/write-post/${type}/one-on-one/final-check`)}
      />
    </>  
  );
};

export default WriteContent;