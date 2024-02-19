import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import { PostContainer } from '@components/Home/OurTownPosts/OurTownPost/styles';
import PostComponent from '@components/Home/OurTownPosts/PostComponents/PosComponentn/PostComponent';
import { Data } from '@components/Home/OurTownPosts/DumyData';

const Container = styled.div`
  padding-top: 60px;
`;

function LikePosts() {
  //Todo: 관심목록 api로 받아오기
  return (
    <>
      <CommonHeader>관심 목록</CommonHeader>
      <Container>
        {Data.map((post) => {
          return (
            <PostContainer key={post.id}>
              <PostComponent post={post} />
            </PostContainer>
          );
        })}
      </Container>
    </>
  );
}

export default LikePosts;
