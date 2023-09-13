import { useNavigate } from 'react-router-dom';
import goback from '@Assets/Icons/Home/Goback.svg';

interface IGobackBtnProps {
  onClick?: () => void;
}

const GobackBtn = ({ onClick }: IGobackBtnProps) => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <button className="gobackBtn" onClick={onClickBtn}>
      <img src={goback} />
    </button>
  );
};

export default GobackBtn;
