import { Swiper, SwiperSlide } from 'swiper/react';
import RecentlyViewedPost from './RecentlyViewedPost';

const data = [
  {
    id: '14214214',
    thumbnail:
      'https://twicpics.celine.com/product-prd/images/large/4S193CPLB.38NO_2_SUM21_614562.jpg?twic=v1/cover=1:1/resize-max=480',
    title: '여성용 나비선글라스',
    category: '볼캡(새 제품)',
  },
  {
    id: '14214214',
    thumbnail:
      'https://twicpics.celine.com/product-prd/images/large/4S193CPLB.38NO_2_SUM21_614562.jpg?twic=v1/cover=1:1/resize-max=480',
    title: '여성용 나비선글라스',
    category: '볼캡(새 제품)',
  },
  {
    id: '14214214',
    thumbnail:
      'https://twicpics.celine.com/product-prd/images/large/4S193CPLB.38NO_2_SUM21_614562.jpg?twic=v1/cover=1:1/resize-max=480',
    title: '여성용 나비선글라스',
    category: '볼캡(새 제품)',
  },
  {
    id: '14214214',
    thumbnail:
      'https://twicpics.celine.com/product-prd/images/large/4S193CPLB.38NO_2_SUM21_614562.jpg?twic=v1/cover=1:1/resize-max=480',
    title: '여성용 나비선글라스',
    category: '볼캡(새 제품)',
  },
  {
    id: '14214214',
    thumbnail:
      'https://twicpics.celine.com/product-prd/images/large/4S193CPLB.38NO_2_SUM21_614562.jpg?twic=v1/cover=1:1/resize-max=480',
    title: '여성용 나비선글라스',
    category: '볼캡(새 제품)',
  },
];

function RecentlyViewedPosts() {
  return (
    <Swiper spaceBetween={8} slidesPerView={3.2}>
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <RecentlyViewedPost
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            category={item.category}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RecentlyViewedPosts;
