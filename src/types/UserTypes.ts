export interface Coordinates {
  latitude: number;
  longitude: number;
}
export type GradeType = 'one' | 'two' | 'three' | 'four' | null;

export interface User {
  id: string;
  profile_image: string;
  nickname: string;
  coordinates: { latitude: number; longitude: number };
  grade: GradeType;
  town: string;
}
