import { useLocation } from 'react-router-dom';

const useQuerystring = (key: string) => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return query.get(key);
};

export default useQuerystring;
