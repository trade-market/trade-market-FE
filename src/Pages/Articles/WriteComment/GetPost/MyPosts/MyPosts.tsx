import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Data } from '@components/Home/OurTownPosts/DumyData';
import PostComponent from '@components/Home/OurTownPosts/PostComponents/PosComponentn/PostComponent';
import { PostContainer } from '@components/Home/OurTownPosts/OurTownPost/styles';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';

const Container = styled.div`
  padding-top: 48px;
`;

function MyPosts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePostClick = (postId: string) => {
    navigate(`/articles/${id}/write-comment/get-post/2`, {
      state: { selectedPostId: postId },
      replace: true,
    });
  };

  return (
    <>
      <CommonHeader>내 게시물</CommonHeader>
      <Container>
        {/* Todo: user id로 해당 id에 대한 게시물 API로 리스트 받아오기 */}
        {Data.map((post, i) => {
          return (
            <div onClick={() => handlePostClick(post.id)} key={i}>
              <PostContainer>
                <PostComponent post={post} />
              </PostContainer>
            </div>
          );
        })}
      </Container>
    </>
  );
}

export default MyPosts;
