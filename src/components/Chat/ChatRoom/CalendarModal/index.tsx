import styled from 'styled-components';
import { size } from '@/styles/theme';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';

const CalendarModal = () => {
  return (
    <Container>
      CalendarModal
      <PostBlueButtons
        option={1}
        disabled={true}
        BlueButtonName={'완료'}
        BlueButtonClickHandler={()=> console.log('hj')}
        />
    </Container>
  );
};

export default CalendarModal;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${size.mobile};
  max-height: 455px;
  height: 100%;
  padding: 20px 0;
  z-index: 150;
  position: fixed;
  bottom: 0;
  border-radius: 8px 16px 0 0;
  background-color: ${({ theme }) => theme.color.bgColor};
  box-shadow: 1px 1px 3px 1px ${({ theme }) => theme.color.gray};
  animation: bottomUp 0.3s ease-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes bottomUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

`;
