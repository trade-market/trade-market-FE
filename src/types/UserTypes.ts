export interface NewUserInfo {
  auth_id: string;
  nickname: string | '';
  profile_image: string | '';
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface User {
  id: string;
  profile_image: string;
  nickname: string;
  coordinate: { lat: string; lng: string };
  grade: 'one' | 'two' | 'three' | 'four' | null;
  town: string;
}
