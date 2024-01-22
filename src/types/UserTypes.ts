import { IResponse } from './AuthTypes';

export type GradeType = 'one' | 'two' | 'three' | 'four' | null;

interface IAddress {
  id: string;
  city: string;
  name: string;
}

export interface IUser {
  id: string;
  nickname: string;
  grade: GradeType;
  profileImage: string;
  address: IAddress;
}

export type UserResponse = IResponse<IUser>;
