import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import BlueButton from '@components/common/Buttons/BlueButton';
import PostSection from '@/components/WritePost/PostSection';
import SelectBox from '@components/WritePost/SelectBox';
import useNavigateButton from '@hooks/useNavigateButton';
import * as O from '../OneOnOneStyles';

const SelectElement = () => {
  const handleNextButtonClick = useNavigateButton(`/write-post/one-on-one/write-content`);

  const renderPostSection = (
    label: string,
    placeholder: string,
    option: number,
    ) => (
      <PostSection label={label}>
        <SelectBox
          placeholder={placeholder}
          option={option}
          />
      </PostSection>
  ); 

  return (
    <>
      <O.Container>
        {renderPostSection('제공할 재능 카테고리', '제공할 재능 선택', 0)}
        {renderPostSection('교환할 재능 카테고리', '교환할 재능 선택', 0)}
        {renderPostSection('거래 가능 시간', '거래 가능 시간 선택', 2)}
      </O.Container>  
      {/*  */}
      <BottomBtnSection>
        <BlueButton
          maxWidth="100%"
          disabled={false}
          onClick={handleNextButtonClick}
        >
        다음
        </BlueButton>
      </BottomBtnSection>
    </>
  );
};

export default SelectElement;