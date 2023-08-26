import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
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

function InsertPostLink() {
  const location = useLocation();

  return (
    <>
      <CommonHeader />
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
              ? `articles/${location.state.selectedPostId}`
              : ''
          }
        />
        <ActionButton backgroundColor="white" borderColor="Mainblue">
          링크 가져오기
        </ActionButton>
      </ContentsSection>
      <BottomBtnSection>
        <ActionButton>이전</ActionButton>
        <BlueButton maxWidth="100%" disabled={!location.state?.selectedPostId}>
          다음
        </BlueButton>
      </BottomBtnSection>
    </>
  );
}

export default InsertPostLink;
