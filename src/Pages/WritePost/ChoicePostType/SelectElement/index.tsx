import AllSelectElements from '@components/WritePost/CommonTemplet/AllSelectElements';
import { useOutletContext, useParams } from 'react-router-dom';
import useNavigateButton from '@hooks/useNavigateButton';

interface ISelectElementOutletProps {
  open: () => void;
}

const SelectElement = () => {
  const { exchangeType, tradeType } = useParams();
  const { open } = useOutletContext<ISelectElementOutletProps>();
  const handleNextButtonClick = useNavigateButton(`/write-post/${exchangeType}/${tradeType}/write-content`);

  return (
    <AllSelectElements handleNextButtonClick={handleNextButtonClick} open={open}/>
  );
};

export default SelectElement;