import FinalCheckTitle from '@components/WritePost/04-FinalCheck/FinalCheckTitle';
import PostBlueButtons from '@components/WritePost/_commons/PostBlueButtons/PostBlueButtons';
import PostContainer from '@components/WritePost/_commons/PostContainer';
import { useCreatePostMutation } from '@store/api/postApiSlice';
import { RootState } from '@store/types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as F from './styles';

const FinalCheckPost = () => {
  const [createPost] = useCreatePostMutation();
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
    console.log(postObject);
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
                {<PostContainer completePost={completePost} titles={titles} />}
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
