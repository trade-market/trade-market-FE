import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import { useParams } from 'react-router-dom';
import * as A from './ArticlesStyles';
import WriterProfile from '@/components/Articles/WriterProfile/WriterProfile';
import ProductInfo from '@components/Articles/ProductInfo/ProductInfo';
import PostActions from '@components/Articles/PostActions/PostActions';

function Articles() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <CommonHeader>상세 페이지</CommonHeader>
      <A.Container>
        {/* Todo: Image slide 적용?  글쓰기시 사진 한장인지 여러장인지 확인 필요*/}
        <A.ProductImage src="https://health.chosun.com/site/data/img_dir/2021/06/08/2021060801363_0.jpg" />
        <A.ContentsContainer>
          <WriterProfile
            profileImg="https://www.a-m.co.kr/news/photo/202202/603633_4408_253.jpg"
            nickname="동그란 딸기"
            location="한강로동"
          />
          <ProductInfo
            title="여성용 나비 선글라스"
            category="의류"
            uploadTime="3분전"
            daedline="08월 17일"
            desiredCategory="의류"
            tradeTime="08월 17일"
            price="21,000~24,000"
            description="2년 간 사용했고, 기스가 좀 있습니다."
          />
        </A.ContentsContainer>
      </A.Container>
      <PostActions />
    </>
  );
}

export default Articles;
