import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

interface IProductImagesContainerProps {
  images: string[];
}

function ProductImagesContainer({ images }: IProductImagesContainerProps) {
  return (
    <Swiper spaceBetween={0} slidesPerView={1}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <ProductImage src={image} alt={`제품 이미지 ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductImagesContainer;
