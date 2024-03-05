import PostOutlet from '@components/WritePost/02-ChoicePostType/PostOutlet/PostOutlet';
import { useParams } from 'react-router-dom';

const WritePost = () => {
  const { tradeType } = useParams();
  const type = tradeType === '1:1' ? tradeType : '오퍼';

  return <PostOutlet title={'게시물 작성'} tradeType={type} />;
};

export default WritePost;
