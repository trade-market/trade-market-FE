import { useNavigate } from 'react-router-dom';

const useNavigateButton = ( loaction: String | number ) => {
  const navigate = useNavigate();
  return () => navigate(`${ loaction }`);
};

export default useNavigateButton;