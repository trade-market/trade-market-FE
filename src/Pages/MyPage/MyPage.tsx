import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import Profile from '@components/MyPage/Profile';
import ExchangeInfoList from '@components/MyPage/ExchangeInfoList';
import OptionModal from '@components/MyPage/OptionModal';
import useModal from '@hooks/useModal';
import RecentlyViewedPostsContainer from '@components/MyPage/RecentlyViewedPostsContainer';

const MyPageContainer = styled.div`
  width: 100%;
  padding-top: 48px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 21px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.whiteGray};
  margin-top: 24px;
  margin-bottom: 20px;
`;

function MyPage() {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <CommonHeader visibleHeart visibleOption optionClick={open}>
        마이페이지
      </CommonHeader>
      <MyPageContainer>
        <TopSection>
          <Profile />
          <ExchangeInfoList />
        </TopSection>
        <RecentlyViewedPostsContainer />
        <Line />
      </MyPageContainer>
      {isOpen && <OptionModal close={close} />}
    </>
  );
}

export default MyPage;
