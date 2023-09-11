import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '@store/types';
import { setTitlePost, setContentPost, setMinPricePost, setMaxPricePost } from '@/store/slices/WritePostSlice';
import BlueTextArea from '@/components/WriteComment/CreatePost/BlueTextArea';
import PostSection from '@/components/WritePost/PostSection';
import PriceSlideBar from '@/components/WriteComment/CreatePost/PriceSlideBar/PriceSlideBar';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';
import * as O from '../WritePostType';

const WriteContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { exchangeType, tradeType } = useParams();
  const selectTitle = useSelector((state: RootState) => state.WritePost.title);
  const selectContent = useSelector((state: RootState) => state.WritePost.content);
  const selectMinPrice = useSelector((state: RootState) => state.WritePost.minPrice);
  const selectMaxPrice = useSelector((state: RootState) => state.WritePost.maxPrice);

  useEffect(() => { //* type(주소)에 따라 초기값 변경
    dispatch(setTitlePost(''));
    dispatch(setContentPost(''));
    dispatch(setMinPricePost(0));
    dispatch(setMaxPricePost(2_000_000));
  }, []);

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
      BlueButtonClickHandler={() => navigate(`/write-post/${exchangeType}/${tradeType}/final-check`)}
      />
    </>  
  );
};

export default WriteContent;