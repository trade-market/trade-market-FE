import { Wrapper, PostContainer } from './OurTownPostStyles';
import PostComponent from './PostComponents/PostComponent';
import { Data } from './DumyData';
import { Link } from 'react-router-dom';

const OurTownPost = () => {
  return (
    <Wrapper>
      <div className="Menu-title">우리 동네 게시글</div>
      {Data.map((post, i) => {
        return (
          <Link to={`/articles/${post.id}`} key={i}>
            <PostContainer>
              <PostComponent post={post} />
            </PostContainer>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default OurTownPost;
