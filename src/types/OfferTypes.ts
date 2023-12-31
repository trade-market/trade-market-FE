import { GradeType } from './UserTypes';

export interface OfferPostTypes {
  id: string;
  userId: string;
  profileImg: string;
  nickname: string;
  location: string;
  rating: GradeType;
  title: string;
  category: string;
  price: string;
  createdAt: Date | string;
  text: string;
  isOriginalPost: boolean;
}
