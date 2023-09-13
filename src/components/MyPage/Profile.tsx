import { useSelector } from 'react-redux';
import { RootState } from '@store/types';
import styled from 'styled-components';
import RatingBadge from '@components/common/RatingBadge';
import { useNavigate } from 'react-router-dom';

const ProfileContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
  }

  .profile-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .edit-btn {
    width: 90px;
    height: 24px;
    border-radius: 2px;
    border: none;
    font-weight: 500;
    padding: 4px 13px;
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 12px;

  .nickname {
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: 600;
  }

  .grade {
    display: flex;
    align-items: center;
    gap: 4px;
    line-height: 130%;
    color: ${({ theme }) => theme.color.Mainblue};
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: 500;
  }
`;

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const handleEditBtnClick = () => navigate('/edit');

  return (
    <ProfileContainer>
      <div className="left">
        <img className="profile-img" src={user.profile_image} />
        <TextSection>
          <div className="nickname">{user.nickname}</div>
          <div className="grade">
            내 거래 등급 <RatingBadge rating={user.grade} />
          </div>
        </TextSection>
      </div>
      <button className="edit-btn" onClick={handleEditBtnClick}>
        프로필 편집
      </button>
    </ProfileContainer>
  );
}

export default Profile;
