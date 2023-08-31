import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Progressbar from '@/components/WriteComment/Progressbar';
import CommonHeader from '@/components/common/CommonHeader/CommonHeader';
import linkChain from '@/Assets/Icons/WriteComment/Link_Chain.svg';
import ContentsSection from '@/components/WriteComment/ContentsSection';
import TitleSection from '@/components/WriteComment/TitleSection';
import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import ActionButton from '@/components/common/Buttons/ActionButton';
import BlueButton from '@/components/common/Buttons/BlueButton';

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.black};
  padding-bottom: 4px;
  color: ${({ theme }) => theme.color.gray};
  text-align: center;
  margin-top: 56px;
  margin-bottom: 24px;

  &:focus {
    outline: none;
  }
`;

const BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:5173'
    : '배포주소env';

function InsertPostLink() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBackBtnClick = () => navigate(`/articles/${id}/write-comment`);

  const handleGetPostLinkBtnClick = () => navigate('my-posts');

  const handleNextBtnClick = () =>
    navigate(`/articles/${id}/write-comment/get-post/3`, {
      state: { selectedPostId: location.state?.selectedPostId },
    });

  const handleCloseButton = () => {
    navigate(`/articles/${id}`, { replace: true });
  };

  return (
    <>
      <CommonHeader display={'flex'} closeClick={handleCloseButton} />
      <Progressbar number={2} total={3} icon={linkChain} />
      <ContentsSection>
        <TitleSection
          h1Text="게시물 링크 삽입"
          h2Text="내 거래 항목의 게시글의 링크를 삽입해주세요."
        />
        <Input
          type="text"
          disabled={true}
          value={
            location.state?.selectedPostId
              ? `${BASE_URL}/articles/${location.state.selectedPostId}`
              : ''
          }
        />
        <ActionButton
          $backgroundColor="white"
          $borderColor="Mainblue"
          onClick={handleGetPostLinkBtnClick}
        >
          링크 가져오기
        </ActionButton>
      </ContentsSection>
      <BottomBtnSection>
        <ActionButton onClick={handleGoBackBtnClick}>이전</ActionButton>
        <BlueButton
          maxWidth="100%"
          disabled={!location.state?.selectedPostId}
          onClick={handleNextBtnClick}
        >
          다음
        </BlueButton>
      </BottomBtnSection>
    </>
  );
}

export default InsertPostLink;
