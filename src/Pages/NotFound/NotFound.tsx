import styled from 'styled-components';
import character_icon from '@Assets/Character_Icons/Character_basic_160_160 ver.svg';
import BlueButton from '@components/common/Buttons/BlueButton';
import { useNavigate } from 'react-router-dom';

const NotFoundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ebf0fc;
  width: 100%;
  height: 100%;
  z-index: 100;
  padding: 0 21px;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 51px;
`;

const CharacterIcon = styled.img`
  width: 160px;
  height: 160px;
`;

const Text = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray};
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 31px;
  width: 90%;
`;

function NotFound() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <NotFoundWrapper>
      <ContentWrapper>
        <CharacterIcon src={character_icon} alt="character" />
        <Text>해당 페이지를 찾을 수 없습니다.</Text>
        <ButtonContainer>
          <BlueButton maxWidth="100%" onClick={handleButtonClick}>
            되돌아가기
          </BlueButton>
        </ButtonContainer>
      </ContentWrapper>
    </NotFoundWrapper>
  );
}

export default NotFound;
