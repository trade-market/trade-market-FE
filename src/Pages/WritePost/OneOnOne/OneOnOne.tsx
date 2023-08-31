import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import useNavigateButton from '@hooks/useNavigateButton';
import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import BlueButton from '@components/common/Buttons/BlueButton';
import PostSection from '@/components/WritePost/PostSection';
import * as O from './OneOnOneStyles';

const OneOnOne = () => {

  const handleCloseButton = useNavigateButton(`/`);
  // todo 작성 완료 페이지로 이동
  const handleNextButtonClick = useNavigateButton(`/`);

  const renderPostSection = (
    label: string,
    placeholder: string,
    option: number,
    ) => (
      <PostSection
        label={label}
        placeholder={placeholder}
        option={option}
        />
  ); 

  return (
    <>
      <CommonHeader
        display={'flex'}
        closeClick={handleCloseButton}
      >게시글 작성</CommonHeader>
      {/*  */}
      <O.Container>
        {renderPostSection('제공할 재능 카테고리', '제공할 재능 선택', 0)}
        {renderPostSection('교환할 재능 카테고리', '교환할 재능 선택', 0)}
        {renderPostSection('거래 가능 시간', '거래 가능 시간 선택', 2)}
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