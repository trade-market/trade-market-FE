import Category from '@components/WritePost/_commons/Category/Category';
import { format } from 'date-fns';
import { ImgSection } from '../../../../Pages/WritePost/04-FinalCheck/FinalCheckPost/styles';

interface IPostContainerProps {
  completePost: any;
  titles: string;
}

const PostContainer = ({ completePost, titles }: IPostContainerProps) => {
  const priceString = ([...arr]) =>
    arr.map((v) => v.toLocaleString()).reduce((a, b) => a + b) + '원';

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

  const renderContainer = (titles: string) => {
    switch (titles) {
      case '이미지':
        return (
          <div className="images">{renderImageSection(completePost.image)}</div>
        );
      case '카테고리':
        return (
          <div className="category">
            <Category
              provide={completePost.provide}
              exchange={completePost.exchange}
            />
          </div>
        );
      case '거래 마감일':
        return <div className="content">{TradeDeadline}</div>;
      case '거래 가능 시간':
        return <div className="content">{completePost.ableTime}</div>;
      case '내용':
        return <div className="content">{completePost.content}</div>;
      case '가격 제안':
        return (
          <div className="content">
            {priceString([completePost.minPrice, '~', completePost.maxPrice])}
          </div>
        );
      default:
        return <div className="content">{completePost.title}</div>;
    }
  };

  return <div className="container-values">{renderContainer(titles)}</div>;
};

export default PostContainer;
