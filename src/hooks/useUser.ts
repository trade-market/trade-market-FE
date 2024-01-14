import { tokenStorage } from '@utils/tokenStorage';
import { useGetUserInfoQuery } from '@store/api/userApiSlice';

export const useUser = () => {
  const token = tokenStorage.getAccessToken();
  const result = useGetUserInfoQuery(undefined, { skip: !token });

  return {
    data: result.data,
    isLoading: result.isLoading,
    error: result.error,
    isError: result.isError,
    isSuccess: result.isSuccess,
  };
};
