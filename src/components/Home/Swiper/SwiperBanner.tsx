import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Container, SwiperImg } from './styles';
import banner from '@Assets/Icons/Home/Banner.svg';

const SwiperBanner = () => {
  const banners = [banner, banner, banner];

  return (
    <Container>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {banners.map((banner, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperImg src={banner} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SwiperBanner;
