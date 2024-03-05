import WriteContents from '@components/WritePost/03-SelectPostOptions/WriteContents/WriteContents';
import useNavigateButton from '@hooks/useNavigateButton';
import { useLocation } from 'react-router';

const EditWriteContent = () => {
  const NextLocation = window.location.pathname.replace(
    'write-content',
    `final-check`
  );
  const handleNextButtonClick = useNavigateButton(NextLocation);
  const { state } = useLocation();

  return (
    <WriteContents
      handleNextButtonClick={handleNextButtonClick}
      title={state.title}
      content={state.description}
    />
  );
};

export default EditWriteContent;
