import * as P from './ProductInfoStyles';
import Title from '@components/common/BigTitle';

interface IProductInfoProps {
  title: string;
  category: string;
  uploadTime: string;
  daedline: string;
  desiredCategory: string;
  tradeTime: string;
  price: string;
  description: string;
}

function ProductInfo({
  title,
  category,
  uploadTime,
  daedline,
  desiredCategory,
  tradeTime,
  price,
  description,
}: IProductInfoProps) {
  // Todo: Props 형식 처리 해야됨. Ex) 날짜, 가격
  return (
    <P.Container>
      <P.TitleContainer>
        <P.leftContainerInTitle>
          <Title>{title}</Title>
          <P.Category>{category}</P.Category>
        </P.leftContainerInTitle>
        <P.Date>{uploadTime}</P.Date>
      </P.TitleContainer>
      <P.InfoContainer>
        <div>
          <P.InfoTitle>거래 마감일</P.InfoTitle>
          <P.InfoDate>{daedline}</P.InfoDate>
        </div>
        <div>
          <P.InfoTitle>희망 물품</P.InfoTitle>
          <div className="category">{desiredCategory}</div>
        </div>
        <div>
          <P.InfoTitle>거래 가능 시간</P.InfoTitle>
          <P.InfoDate>{tradeTime}</P.InfoDate>
        </div>
        <div>
          <P.InfoTitle>가격 제안</P.InfoTitle>
          <div className="price">{price} 원</div>
        </div>
      </P.InfoContainer>
      <P.Description>{description}</P.Description>
    </P.Container>
  );
}

export default ProductInfo;
