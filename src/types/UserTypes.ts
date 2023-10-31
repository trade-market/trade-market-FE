export interface Coordinates {
  latitude: string;
  longitude: string;
}
export type GradeType = 'one' | 'two' | 'three' | 'four' | null;

export interface User {
  id: string;
  profile_image: string;
  nickname: string;
  coordinates: { latitude: string; longitude: string };
  grade: GradeType;
  town: string;
}
