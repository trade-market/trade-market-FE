import { useState } from 'react';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import Profile from '@components/MyPage/Profile';
import ExchangeInfoList from '@components/MyPage/ExchangeInfoList';
import BottomSheet from '@components/common/BottomSheet';

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

const LogoutText = styled.div``;

const WithDrawText = styled.div`
  color: red;
`;

function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOptionBtnClick = () => setIsModalOpen(true);
  return (
    <>
      <CommonHeader
        visibleHeart
        visibleOption
        optionClick={handleOptionBtnClick}
      >
        마이페이지
      </CommonHeader>
      <MyPageContainer>
        <TopSection>
          <Profile />
          <ExchangeInfoList />
        </TopSection>
      </MyPageContainer>
      {isModalOpen && (
        <BottomSheet onClick={() => setIsModalOpen(false)}>
          <LogoutText>로그아웃</LogoutText>
          <WithDrawText>탈퇴하기</WithDrawText>
        </BottomSheet>
      )}
    </>
  );
}

export default MyPage;
