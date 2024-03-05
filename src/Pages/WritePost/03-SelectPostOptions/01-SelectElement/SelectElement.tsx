import AllSelectElements from '@Pages/WritePost/WritePostcompo/CommonTemplet/AllSelectElements/AllSelectElements';
import useNavigateButton from '@hooks/useNavigateButton';
import { useOutletContext, useParams } from 'react-router-dom';

interface ISelectElementOutletProps {
  open: () => void;
}

const SelectElement = () => {
  const { exchangeType, tradeType } = useParams();
  const { open } = useOutletContext<ISelectElementOutletProps>();
  const handleNextButtonClick = useNavigateButton(
    `/write-post/${exchangeType}/${tradeType}/write-content`
  );

  return (
    <AllSelectElements
      handleNextButtonClick={handleNextButtonClick}
      open={open}
    />
  );
};

export default SelectElement;
