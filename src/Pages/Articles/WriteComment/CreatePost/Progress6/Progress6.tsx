import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import InfoComponent from '../InfoComponent';
import complete from "@Assets/offer/Write-comment/[Progress]complete.svg";
import { Container, BlueContainer, PostContainer } from './Progress6Styles';

const Progress6 = () => {
  const titles = ['이미지', '희망물품', '카테고리', '예상 가격대', '작성글'];
  const isCreatePost = {
    image: 'https://velog.velcdn.com/images/haizel/post/b5aca431-b080-4b78-a26c-7e1fd42dc516/image.jpeg',
    product: '선글라스',
    category: '의류',
    price: ['21,000', '~', '24,000'],
    information: '선글라스를 구매하신다고 하면 다른 물건도 얹어드릴 수 있습니다.'
  }
  const priceString = (arr: string[]) => arr.reduce((a, b) => a + b) + '원';
  const setCreatePost = [isCreatePost.image, isCreatePost.product, isCreatePost.category, priceString(isCreatePost.price), isCreatePost.information]

  const { selectImage, selectProduct, selectCategory, selectPrice, selectInfo } = useSelector((state: RootState) => ({
    selectImage: state.createPost.product,
    selectProduct: state.createPost.category,
    selectCategory: state.createPost.category,
    selectPrice: state.createPost.category,
    selectInfo: state.createPost.category,
  }));

  console.log(selectImage, selectProduct, selectCategory, selectCategory, selectPrice, selectInfo)

  //todo : 작성글의 n글자까지만 보여줄지 or 작성글 길이에 따라 container의 길이도 길어지게 할건지 

  return (
    <>
      <InfoComponent
        n={6}
        ProgessIcon={complete}
        text={["최종 확인", "댓글 작성 완료 전, 거래 내용을 한번 더 확인해주세요.", "직접 작성한 댓글의 경우, 추후 댓글 수정이 가능합니다."]}
        disabled={false}
      />
      <Container>
        <BlueContainer>
          <PostContainer>
            {titles.map((title, i) => {
              return (
                <div key={i} className='row'>
                  <div className='title'>{title}</div>
                  {i === 0 ? 
                    <img className='img' src={setCreatePost[i]} />
                    : <div className='content'>{setCreatePost[i]}</div>
                  }
                </div>
              )
            })}
          </PostContainer>
        </BlueContainer>
      </Container>
    </>
  );
};

export default Progress6;