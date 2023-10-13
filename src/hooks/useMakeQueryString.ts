import { useSearchParams } from 'react-router-dom';

const useMakeQueryString = (sort_type: string, select: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.set(sort_type, select);
  setSearchParams(searchParams);

  return searchParams;
};

export default useMakeQueryString;
