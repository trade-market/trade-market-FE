import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import Profile from '@components/MyPage/Profile';
import ExchangeInfoList from '@components/MyPage/ExchangeInfoList';
import OptionModal from '@components/MyPage/OptionModal';
import useModal from '@hooks/useModal';
import RecentlyViewedPosts from '@components/MyPage/RecentlyViewedPost';
import DividedLine from '@components/common/DividedLine';
import MannersContainer from '@components/MyPage/Manners/MannersContainer';
import ConfirmModal from '@components/common/ConfirmModal';
import { tokenStorage } from '@utils/tokenStorage';

const MyPageContainer = styled.div`
  width: 100%;
  padding-top: 48px;
  padding-bottom: 70px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 21px;
`;

function MyPage() {
  const navigate = useNavigate();
  const { isOpen, open, close } = useModal();

  const {
    isOpen: isLogoutModalOpen,
    open: logoutModalOpen,
    close: logoutModalClose,
  } = useModal();

  const handleHeartClick = () => navigate('/my-page/like-posts');

  const onOptionModalLogoutClick = () => {
    close();
    logoutModalOpen();
  };

  const handleConfirm = () => {
    tokenStorage.clearTokens();
    navigate('/');
  };

  return (
    <>
      <CommonHeader
        visibleHeart={true}
        visibleOption={true}
        optionClick={open}
        heartClick={handleHeartClick}
      >
        마이페이지
      </CommonHeader>
      <MyPageContainer>
        <TopSection>
          <Profile />
          <ExchangeInfoList />
        </TopSection>
        <RecentlyViewedPosts />
        <DividedLine />
        <MannersContainer mannerType="매너" />
        <DividedLine />
        <MannersContainer mannerType="비매너" />
      </MyPageContainer>
      <OptionModal
        isOpen={isOpen}
        close={close}
        onLogoutClick={onOptionModalLogoutClick}
      />
      <ConfirmModal
        isOpen={isLogoutModalOpen}
        title="로그아웃"
        content="로그아웃 하시겠습니까?"
        confirmedTitle="로그아웃"
        confirmedContent="로그아웃 되었습니다."
        onFinalOkClick={handleConfirm}
        closeAction={logoutModalClose}
      />
    </>
  );
}

export default MyPage;
