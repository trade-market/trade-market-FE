import { useNavigate } from 'react-router-dom';

export const useNavigateButton = ( loaction: String | number ) => {
  const navigate = useNavigate();
  return () => navigate(`${ loaction }`);
};

export default useNavigateButton;
