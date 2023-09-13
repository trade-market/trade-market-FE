import styled from 'styled-components';
import RecentlyViewedPostList from '@components/MyPage/RecentlyViewedPostList';

const Container = styled.div`
  margin-top: 32px;
  padding: 0 21px;
`;
const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: 600;
  margin-bottom: 12px;
`;

function RecentlyViewedPostsContainer() {
  return (
    <Container>
      <Title>최근 본 게시물</Title>
      <RecentlyViewedPostList />
    </Container>
  );
}

export default RecentlyViewedPostsContainer;
