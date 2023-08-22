import * as W from './WriteCommentStyles';
import Progressbar from '@components/Articles/WriteComment/Progressbar';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';

function WriteComment() {
  return (
    <>
      <CommonHeader />
      <W.Container>
        <Progressbar></Progressbar>
      </W.Container>
    </>
  );
}

export default WriteComment;
