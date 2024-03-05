import React from 'react';
import styled from 'styled-components';
import { PostContainer } from '@components/Home/OurTownPosts/OurTownPost/styles';
import PostComponent from '@components/Home/OurTownPosts/PostComponents/PosComponentn/PostComponent';
import { Data } from '@components/Home/OurTownPosts/DumyData';

interface ISearchPostsProps {}

const SearchPosts = () => {
  return (
    <Container>
      {Data ? (
        Data.map((post, i) => {
          return (
            <PostContainer key={i}>
              <PostComponent post={post} />
            </PostContainer>
          );
        })
      ) : (
        <Text>일치하는 게시물이 없습니다.</Text>
      )}
    </Container>
  );
};

export default SearchPosts;

const Container = styled.div`
  padding: 10px 20px 0 20px;
`;

const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.color.gray};
  transform: translate(-50%, -50%);
`;
