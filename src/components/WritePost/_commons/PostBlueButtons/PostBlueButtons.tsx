import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { size } from '@/styles/theme';
import ActionButton from '@/components/common/Buttons/ActionButton';
import BlueButton from '@components/common/Buttons/BlueButton';

interface IPostBlueButtonsProps {
  option: number;
  ActionButtonName?: string;
  BlueButtonName?: string;
  disabled: boolean;
  BlueButtonClickHandler: () => void;
}

const PostBlueButtons = ({
  option,
  ActionButtonName = '이전',
  BlueButtonName = '다음',
  disabled,
  BlueButtonClickHandler,
}: IPostBlueButtonsProps) => {
  const navigate = useNavigate();

  return (
    <ButtonContainer>
      {option !== 1 ? (
        <ActionButton onClick={() => navigate(-1)}>
          {ActionButtonName}
        </ActionButton>
      ) : null}
      <BlueButton
        maxWidth={'100%'}
        disabled={disabled}
        onClick={BlueButtonClickHandler}
      >
        {BlueButtonName}
      </BlueButton>
    </ButtonContainer>
  );
};

export default PostBlueButtons;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${size.mobile};
  min-height: 70px;
  padding: 20px 20px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.bgColor};
  gap: 8px;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    .active {
      color: ${({ theme }) => theme.color.Mainblue};
    }
  }
  .icon {
    width: 21px;
    height: 21px;
    margin-bottom: 3px;
  }
`;
