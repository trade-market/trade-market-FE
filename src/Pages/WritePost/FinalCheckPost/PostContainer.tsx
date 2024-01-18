import { format } from 'date-fns';
import { ImgSection } from './FinalCheckPostStyles';
import Category from '@components/WritePost/Category/Category';

interface IPostContainerProps {
  completePost: Post;
  i: number;
}

const PostContainer = ({ completePost, i }: IPostContainerProps) => {
  const currentPrice = (p: number) =>
    p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 화폐 단위 표시(,)

  const priceString = ([...arr]) =>
    arr.map((v) => currentPrice(v)).reduce((a, b) => a + b) + '원';

  const TradeDeadline = format(
    new Date(completePost.deadline),
    `yyyy년 MM월 dd일`
  );

  const renderImageSection = (arr: string[]) =>
    arr.map((img, i) => (
      <ImgSection key={i}>
        <img src={img} />
      </ImgSection>
    ));

  const postKey = Object.keys(completePost);

  return (
    <div className="temp">
      <div className="images">{renderImageSection(completePost.image)}</div>
      <div className="category">
        <Category
          provide={completePost.provide}
          exchange={completePost.exchange}
        />
      </div>
      <div className="content">{TradeDeadline}</div>
      <div className="content">{completePost.ableTime}</div>
      <div className="content">{completePost.title}</div>
      <div className="content">{completePost.content}</div>
      <div className="content">
        {priceString([completePost.minPrice, '~', completePost.maxPrice])}
      </div>
    </div>
  );
};

export default PostContainer;
