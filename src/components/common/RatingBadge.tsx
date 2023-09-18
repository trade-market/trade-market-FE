import { GradeType } from '@/types/UserTypes';
import Rating1 from '@Assets/Icons/rating_1.svg';
import Rating2 from '@Assets/Icons/rating_2.svg';
import Rating3 from '@Assets/Icons/rating_3.svg';
import Rating4 from '@Assets/Icons/rating_4.svg';

interface IRatingBadgeProps {
  rating: GradeType;
}

function getRatingImage(rating: GradeType) {
  switch (rating) {
    case 'one':
      return Rating1;
    case 'two':
      return Rating2;
    case 'three':
      return Rating3;
    case 'four':
      return Rating4;
  }
}

function RatingBadge({ rating }: IRatingBadgeProps) {
  const ImageSrc = getRatingImage(rating);
  return <img src={ImageSrc} alt={`Rating ${rating}`} />;
}

export default RatingBadge;
