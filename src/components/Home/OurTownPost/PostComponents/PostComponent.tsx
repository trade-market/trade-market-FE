import ImgSection from './ImgSection';
import ContentSection from './ContentSection';
import SebSection from './SebSection';

interface IPostComponentProps {
  post: {
    type: number;
    image: string;
    title: string;
    want: string;
    category: string;
    like: boolean;
    location: string;
    date: string;
  };
  isOption?: boolean;
  onOptionClick?: () => void;
}

const PostComponent = ({
  post,
  isOption = false,
  onOptionClick = () => {},
}: IPostComponentProps) => {
  return (
    <>
      <ImgSection type={post.type} image={post.image} />
      <ContentSection
        title={post.title}
        want={post.want}
        category={post.category}
      />
      <SebSection
        like={post.like}
        location={post.location}
        date={post.date}
        isOption={isOption}
        onOptionClick={onOptionClick}
      />
    </>
  );
};

export default PostComponent;
