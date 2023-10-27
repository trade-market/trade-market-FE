import { useNavigate } from 'react-router-dom';

export const useNavigateButton = ( loaction: String | number, state? : any ) => {
  const navigate = useNavigate();
  return () => navigate(`${ loaction }`, {...state});
};

export default useNavigateButton;
