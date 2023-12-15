import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import styled from 'styled-components';
import { format } from 'date-fns';
import Category from '@components/WritePost/Category';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';

const FinalCheckPost = () => {
  const { exchangeType, tradeType } = useParams();
  const navigate = useNavigate();
  const titles = [
    '이미지',
    '카테고리',
    '거래 마감일',
    '거래 가능 시간',
    ' 제목',
    '내용',
    '가격 제안',
  ];
  const completePost = useSelector((state: RootState) => state.WritePost);
  const currentPrice = (p: number) =>
    p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 화폐 단위 표시(,)
  const priceString = ([...arr]) =>
    arr.map((v) => currentPrice(v)).reduce((a, b) => a + b) + '원';
  const deadline = format(new Date(completePost.deadline), `yyyy년 MM월 dd일`);
  const SetCreatePost = [
    completePost.image,
    [completePost.provide, completePost.exchange],
    deadline,
    completePost.ableTime,
    completePost.title,
    completePost.content,
    priceString([completePost.minPrice, '~', completePost.maxPrice]),
  ];

  const renderImageSection = (arr: string[]) =>
    arr.map((img, i) => (
      <ImgSection key={i}>
        <img src={img} />
      </ImgSection>
    ));

  // todo : type(재능, 물물 교환)에 따라 POST/PETCH 요청
  const CompleteHandler = () => {
    navigate(`/`);
  };

  return (
    <>
      <HeadTitle>
        다음 {tradeType === '1:1' ? tradeType : '오퍼'} 게시물을
        업로드하시겠습니까 ?
      </HeadTitle>
      <Container>
        <PostContainer>
          {titles?.map((title, i) => {
            return (
              <div key={i} className="row">
                <div className="title">{title}</div>
                {i === 0 ? (
                  <div className="images">
                    {renderImageSection(completePost.image)}
                  </div>
                ) : i === 1 ? (
                  <div className="category">
                    <Category
                      provide={SetCreatePost[i][0]}
                      exchange={SetCreatePost[i][1]}
                    />
                  </div>
                ) : i === 6 ? (
                  <div className="price">{SetCreatePost[i]}</div>
                ) : (
                  <div className="content">{SetCreatePost[i]}</div>
                )}
              </div>
            );
          })}
        </PostContainer>
      </Container>
      <PostBlueButtons
        option={2}
        disabled={false}
        BlueButtonName={'완료'}
        BlueButtonClickHandler={CompleteHandler}
      />
    </>
  );
};

export default FinalCheckPost;

const HeadTitle = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color.activeBlue};
  font-weight: 600;
  padding: 10px;
  padding-top: 90px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
  padding: 30px 20px;
`;

const PostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 15px;
  font-weight: 400;
  gap: 40px;
  .row {
    display: flex;
  }
  .title {
    width: 44%;
    color: ${({ theme }) => theme.color.gray};
  }
  .content,
  .category,
  .price,
  .images {
    display: flex;
    width: 56%;
  }
  .category {
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.activeBlue};
    align-items: center;
    .provide {
      border-radius: 12px;
      border: 1px solid ${({ theme }) => theme.color.activeBlue};
      margin-right: 5px;
      padding: 3px 12px;
    }
    .exchange {
      color: ${({ theme }) => theme.color.activeBlue};
      border: none;
      border-radius: 12px;
      background-color: #2156f214;
      margin-left: 5px;
      padding: 4px 12px;
    }
  }
  .price {
    color: ${({ theme }) => theme.color.activeBlue};
    font-weight: 600;
  }
  .images {
    overflow-x: auto;
  }
`;

const ImgSection = styled.div`
  display: flex;
  > img {
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 8px;
    margin-right: 5px;
  }
`;
