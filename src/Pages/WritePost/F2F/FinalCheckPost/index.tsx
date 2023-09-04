import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import styled from 'styled-components';
import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import ActionButton from '@/components/common/Buttons/ActionButton';
import BlueButton from '@components/common/Buttons/BlueButton';
import exchange_icon from '@Assets/Icons/WritePost/exchange_icon.svg'

const FinalCheckPost = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const titles = ['이미지', '카테고리', '거래 마감일', '거래 가능 시간', ' 제목', '내용', '가격 제안'];
  const completePost = useSelector((state: RootState) => state.WriteF2FPost);
  const currentPrice = (p: number) => p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 화폐 단위 표시(,)
  const priceString = (([...arr]) => arr.map(v => currentPrice(v)).reduce((a, b) => a + b)+'원');
  const SetCreatePost = [completePost.image, [completePost.provide, completePost.exchange], completePost.deadline, completePost.ableTime, completePost.title, completePost.content, priceString([completePost.minPrice, '~', completePost.maxPrice])]

  // todo : type(재능, 물물 교환)에 따라 POST 요청

  return (
    <>
        <HeadTitle>다음 1 :1 게시물을 업로드하시겠습니까 ?</HeadTitle>
        <Container>
          <PostContainer>
            {titles?.map((title, i) => {
              return (
                <div key={i} className='row'>
                  <div className='title'>{title}</div>
                  {i === 0 ? 
                    <img className='img' src={SetCreatePost[i]} />
                    : i === 1 ?
                      <div className='category'>
                        <span className='provide'>{SetCreatePost[1][0]}</span>
                        <img src={exchange_icon} />
                        <span className='exchange'>{SetCreatePost[1][1]}</span>
                      </div> 
                      : i === 6 ?
                        <div className='price'>{SetCreatePost[i]}</div>
                      : <div className='content'>{SetCreatePost[i]}</div>
                  }
                </div>
              )
            })} 
          </PostContainer>
      </Container>
      <BottomBtnSection>
        <ActionButton onClick={() => navigate(-1)}>이전</ActionButton>
        <BlueButton
          maxWidth={'100%'}
          disabled={false}
          onClick={() => console.log('data fetch')}
          >완료</BlueButton>
        </BottomBtnSection>
    </>
  );
};

export default FinalCheckPost;

const HeadTitle = styled.div`
    display: flex;
    justify-content: center;
    color : ${({ theme }) => theme.color.activeBlue};
    font-weight: 600;
    padding: 10px;
    padding-top: 90px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 378px;
  width: 100%;
  border: none;
  padding: 0px 20px;
  margin-top: 30px;
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
    color : ${({ theme }) => theme.color.gray};
  }
  .content {
    width: 56%;
  }

  .img {
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 8px;
  }

  .category {
    display: flex;
    .provide {
      color : ${({ theme }) => theme.color.activeBlue};
      font-size: 10px;
      font-weight: 500;
      border: 1px solid ${({ theme }) => theme.color.activeBlue};
      border-radius: 12px;
      padding: 3px 12px;
      margin-right: 5px;
    }
    .exchange {
      color : ${({ theme }) => theme.color.activeBlue};
      font-size: 10px;
      font-weight: 500;
      border: none;
      background-color: #2156F214;
      border-radius: 12px;
      padding: 4px 12px;
      margin-left: 5px;
    }
  }

  .price {
    color : ${({ theme }) => theme.color.activeBlue};
    font-weight: 600;
  }
`;