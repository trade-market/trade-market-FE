import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import { setInfoPost } from '@/store/slices/CreateCommentSlice';
import ProcessCompo from '@components/WriteComment/CreatePost/ProcessCompo/ProcessCompo';
import write_imformation from "@Assets/offer/Write-comment/[Progress]_write_imformation.svg";
import { Container } from './Progress5Styles';
import BlueTextArea from "@/components/WriteComment/CreatePost/BlueTextArea";
import PostWrapper from '@components/WriteComment/PostWrapper';

const Progress5 = () => {
  const selectInfo = useSelector((state: RootState) => state.createComment.info);

  // Todo : 최소 글자수 몇 글자? -> 임시 10자

  return (
    <>
      <ProcessCompo
        n={5}
        ProgessIcon={write_imformation}
        text={["전달 사항 작성", "물품에 대한 간단한 설명 및", "상대방에게 전달해야 할 내용을 작성해주세요."]}
        disabled={selectInfo.length < 10}
      />
      <Container>
        <PostWrapper>
          <BlueTextArea
            placeholder="전달 사항 작성 (최대 500자)"
            value={selectInfo}
            maxLength={500}
            dispatchType={setInfoPost}
            />
          </PostWrapper>
      </Container>
    </>
  );
};

export default Progress5;