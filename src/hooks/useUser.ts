import tokenService from '@/service/tokenService';
import { useGetUserInfoQuery } from '@store/api/userApiSlice';

export const useUser = () => {
  const token = tokenService.getAccessToken();
  const result = useGetUserInfoQuery(undefined, { skip: !token });

  return result;
};
