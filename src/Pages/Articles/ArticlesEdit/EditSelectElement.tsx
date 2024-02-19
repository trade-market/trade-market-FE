import AllSelectElements from '@components/WritePost/03-SelectPostOptions/AllSelectElements/AllSelectElements';
import useNavigateButton from '@hooks/useNavigateButton';
import { useLocation } from 'react-router';
import { useOutletContext } from 'react-router-dom';

interface ISelectElementOutletProps {
  open: () => void;
}

const SelectElement = () => {
  const { open } = useOutletContext<ISelectElementOutletProps>();
  const NextLocation = window.location.pathname.replace(
    'select-element',
    `write-content`
  );
  const { state } = useLocation();
  const handleNextButtonClick = useNavigateButton(NextLocation, {
    state: state,
  });

  return (
    <AllSelectElements
      handleNextButtonClick={handleNextButtonClick}
      open={open}
      EditPostData={state}
    />
  );
};

export default SelectElement;
