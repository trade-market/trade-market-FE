// import { useEffect } from "react";
import { Wrapper, PostContainer } from "./OurTownPostStyles";
import PostComponent from "./PostComponents/PostComponent";

  // 더미 데이터
  const data = [
    {
      type: 2,
      image: 'https://velog.velcdn.com/images/haizel/post/c3f99817-6a52-4654-ba3d-04148474d9d9/image.png',
      title: '토익 850점 이상 목표 스터디',
      want: '한국사능력검정시험',
      category: '자격증',
      like: false,
      location: '상수동',
      date : '1일 전'
    },
    {
      type: 1,
      image: 'https://velog.velcdn.com/images/haizel/post/c3f99817-6a52-4654-ba3d-04148474d9d9/image.png',
      title: '토익 850점 이상 목표 스터디',
      want: 'HSK 5급',
      category: '자격증',
      like: true,
      location: '옥수동',
      date : '12일 전'
    },
    {
      type: 1,
      image: 'https://velog.velcdn.com/images/haizel/post/c3f99817-6a52-4654-ba3d-04148474d9d9/image.png',
      title: '해커스 토익',
      want: 'HSK 5급',
      category: '자격증',
      like: true,
      location: '역삼동',
      date : '3일 전'
    },
  ]

const OurTownPost = () => {
  return (
    <Wrapper>
      <div className="Menu-title">우리 동네 게시글</div>
        {data.map((post, i) => {
          return ( 
            <PostContainer key={i}>
              <PostComponent
                post={post}
                />
            </PostContainer>
          )
      })}
    </Wrapper>
  );
};

export default OurTownPost;