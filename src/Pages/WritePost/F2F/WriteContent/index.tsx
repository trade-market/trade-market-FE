import { useState } from "react";
import BlueTextArea from '@/components/WriteComment/CreatePost/BlueTextArea';
import PostSection from '@/components/WritePost/PostSection';
import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import ActionButton from '@/components/common/Buttons/ActionButton';
import BlueButton from '@components/common/Buttons/BlueButton';
import useNavigateButton from '@hooks/useNavigateButton';
import * as O from '../F2FStyles';

const WriteContent = () => {
  const [textAreaValue, setTextAreaValue] = useState('')
  const handleBackButton = useNavigateButton(`/`);
  const handleNextButton = useNavigateButton(`/`);

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value)
  };

  return (
    <>
    <O.Container>
      <PostSection label={'제목'}>
        <BlueTextArea
            placeholder={'제목을 입력해주세요. (최대 50자)'}
            value={textAreaValue}
            maxLength={50}
            maxHeight={'60px'}
            handleChange={handleTextArea}
          />
      </PostSection>
      <PostSection label={'내용'}>
        <BlueTextArea
          placeholder={'작성글을 적어주세요. (최대 500자)'}
          value={textAreaValue}
          maxLength={500}
          handleChange={handleTextArea}
          />
      </PostSection>
    </O.Container>
    <BottomBtnSection>
      <ActionButton onClick={handleBackButton}>이전</ActionButton>
        <BlueButton
          maxWidth={'100%'}
          disabled={true}
          onClick={handleNextButton}
          >다음</BlueButton>
      </BottomBtnSection>
    </>  
  );
};

export default WriteContent;