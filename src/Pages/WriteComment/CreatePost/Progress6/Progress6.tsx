import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import ProcessCompo from '@components/WriteComment/CreatePost/ProcessCompo/ProcessCompo';
import complete from "@Assets/offer/Write-comment/[Progress]complete.svg";
import { Container, BlueContainer, PostContainer } from './Progress6Styles';

const Progress6 = () => {
  const titles = ['이미지', '희망물품', '카테고리', '예상 가격대', '작성글'];
  const completePost = useSelector((state: RootState) => state.createPost);
  const currentPrice = (p: number) => p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 화폐 단위 표시(,)
  const priceString = (([...arr]) => arr.map(v => currentPrice(v)).reduce((a, b) => a + b)+'원');
  const SetCreatePost = [completePost.image, completePost.product, completePost.category, priceString(completePost.price), completePost.info];
  console.log( priceString(completePost.price))

  //todo : 작성글의 n글자까지만 보여줄지 or 작성글 길이에 따라 container의 길이도 길어지게 할건지 

  return (
    <>
      <ProcessCompo
        n={6}
        ProgessIcon={complete}
        text={["최종 확인", "댓글 작성 완료 전, 거래 내용을 한번 더 확인해주세요.", "직접 작성한 댓글의 경우, 추후 댓글 수정이 가능합니다."]}
        disabled={false}
      />
      <Container>
        <BlueContainer>
          <PostContainer>
            {titles?.map((title, i) => {
              return (
                <div key={i} className='row'>
                  <div className='title'>{title}</div>
                  {i === 0 ? 
                    <img className='img' src={SetCreatePost[i]} />
                    : <div className='content'>{SetCreatePost[i]}</div>
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