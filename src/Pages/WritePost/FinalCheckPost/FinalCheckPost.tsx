import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import * as F from './FinalCheckPostStyles';
import FinalCheckTitle from './FinalCheckTitle';
import PostContainer from './PostContainer';
import PostBlueButtons from '@components/WritePost/PostBlueButtons/PostBlueButtons';

const FinalCheckPost = () => {
  const navigate = useNavigate();
  const PostTitles = [
    '이미지',
    '카테고리',
    '거래 마감일',
    '거래 가능 시간',
    ' 제목',
    '내용',
    '가격 제안',
  ];
  const completePost = useSelector((state: RootState) => state.WritePost);

  const postObject = {
    title: completePost.title,
    content: completePost.content,
    postType: ['GOODS', 'TALENT'],
    tradeType: ['SINGLE_TRADE', 'OFFER'],
    provisionCategory: 'DIGITAL_DEVICE',
    wishCategory: 'APPLIANCES',
    suggestedPrice: [completePost.minPrice, completePost.maxPrice],
    closeAt: completePost.deadline,
    tradeTime: ['EARLY_MORNING', 'MORNING', 'AFTERNOON', 'EVENING'],
  };

  // todo : type(재능, 물물 교환)에 따라 POST/PETCH 요청
  const CompleteHandler = () => {
    console.log(completePost);
    // navigate(`/`);
  };

  return (
    <>
      <FinalCheckTitle />
      <F.Container>
        <F.PostContainer>
          {PostTitles?.map((titles, i) => {
            return (
              <div key={i} className="row">
                <div className="title">{titles}</div>
                {<PostContainer completePost={completePost} i={i} />}
              </div>
            );
          })}
        </F.PostContainer>
      </F.Container>
      <PostBlueButtons
        option={2}
        disabled={false}
        BlueButtonName={'완료'}
        BlueButtonClickHandler={CompleteHandler}
      />
    </>
  );
};

export default FinalCheckPost;
