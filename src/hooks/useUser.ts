import { tokenStorage } from '@utils/tokenStorage';
import { useGetUserInfoQuery } from '@store/api/userApiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@store/types';

export const useUser = () => {
  const token = tokenStorage.getAccessToken();
  const result = useGetUserInfoQuery(undefined, { skip: !token });

  return result;
};
