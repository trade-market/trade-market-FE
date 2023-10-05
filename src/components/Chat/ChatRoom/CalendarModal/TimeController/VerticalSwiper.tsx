import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel } from 'swiper/modules';


interface IVerticalSwiperProps {
  TimeData: string[] | number[] | (string | number)[];
  onSlideChange: (swiper: any) => void;
}

const VerticalSwiper = ({TimeData, onSlideChange} : IVerticalSwiperProps) => {

  return (
    <>
      <Swiper
        modules={[Scrollbar, Mousewheel]}
        direction={"vertical"}
        initialSlide={1}
        scrollbar={true}
        mousewheel={true}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        slideToClickedSlide={true}
        onSlideChange={onSlideChange}
        >
        {TimeData.map((value, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div className={isActive ? 'Active' : 'none-Active'}>
                {value}
              </div>
            )}
          </SwiperSlide>
          ))}
      </Swiper>
      <div className="vizor"></div>
    </>
  );
};

export default VerticalSwiper;