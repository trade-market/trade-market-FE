import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import useNavigateButton from '@hooks/useNavigateButton';
import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import BlueButton from '@components/common/Buttons/BlueButton';
import * as O from './OneOnOneStyles';
import PostSection from '@/components/WritePost/PostSection';

const OneOnOne = () => {

  const handleCloseButton = useNavigateButton(`/`);
  // todo 작성 완료 페이지로 이동
  const handleNextButtonClick = useNavigateButton(`/`);

  return (
    <>
      <CommonHeader
        display={'flex'}
        closeClick={handleCloseButton}
      >게시글 작성</CommonHeader>
      {/*  */}
      <O.Container>
        <PostSection
          text={'사진 업로드'}
        />
        <PostSection
          text={'제공할 재능 카테고리'}
        />
        <PostSection
          text={'교환할 재능 카테고리'}
        />
      </O.Container>  
      {/*  */}
      <BottomBtnSection>
        <BlueButton
          maxWidth="100%"
          disabled={true}
          onClick={handleNextButtonClick}
        >
        다음
        </BlueButton>
      </BottomBtnSection>
    </>
  );
};

export default OneOnOne;