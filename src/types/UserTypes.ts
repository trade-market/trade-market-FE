export interface NewUserInfo {
  auth_id: string;
  nickname: string | '';
  profile_image: string | '';
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
export type GradeType = 'one' | 'two' | 'three' | 'four' | null;

export interface User {
  id: string;
  profile_image: string;
  nickname: string;
  coordinates: { lat: string; lng: string };
  grade: GradeType;
  town: string;
}
