// import { useEffect } from "react";
import { Wrapper, PostContainer } from "./OurTownPostStyles";
import PostComponent from "./PostComponents/PostComponent";
import { Data } from "./DumyData";

const OurTownPost = () => {
  return (
    <Wrapper>
      <div className="Menu-title">우리 동네 게시글</div>
        {Data.map((post, i) => {
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