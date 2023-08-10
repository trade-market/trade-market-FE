import ImgSection from "./ImgSection";
import ContentSection from "./ContentSection";
import SebSection from "./SebSection";

interface IPostComponentProps {
  post: {
    type: string;
    image: string;
    title: string;
    want: string;
    category: string;
    like: boolean;
    location: string;
    date: string;
  };
}

const PostComponent = ({post} : IPostComponentProps) => {
  return (
    <>
      <ImgSection
        type={post.type}
        image={post.image}
      />
      <ContentSection
        title={post.title}
        want={post.want}
        category={post.category}
      />
      <SebSection
        like={post.like}
        location={post.location}
        date={post.date}
      />
    </>
  );
};

export default PostComponent;