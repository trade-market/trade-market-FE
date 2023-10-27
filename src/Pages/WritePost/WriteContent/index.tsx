import WriteContents from '@components/WritePost/CommonTemplet/WriteContents';
import useNavigateButton from '@hooks/useNavigateButton';

const WriteContent = () => {
  const NextLocation = window.location.pathname.replace('write-content', `final-check`);
  const handleNextButtonClick = useNavigateButton(NextLocation);

  return (
    <WriteContents handleNextButtonClick={handleNextButtonClick} />
  );
};

export default WriteContent;