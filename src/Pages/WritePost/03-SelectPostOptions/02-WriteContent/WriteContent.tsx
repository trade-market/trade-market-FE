import WriteContents from '@components/WritePost/03-SelectPostOptions/WriteContents/WriteContents';
import useNavigateButton from '@hooks/useNavigateButton';

//* second-step
const WriteContent = () => {
  const NextLocation = window.location.pathname.replace(
    'write-content',
    `final-check`
  );
  const handleNextButtonClick = useNavigateButton(NextLocation);

  return <WriteContents handleNextButtonClick={handleNextButtonClick} />;
};

export default WriteContent;
