import { Container } from './WriteButtonStyles';
import WriteBtn from '@Assets/Icons/Home/WriteBtn.svg';

const WriteButton = () => {
  return (
    <Container>
      <img className="btn" src={WriteBtn} />
    </Container>
  );
};

export default WriteButton;
