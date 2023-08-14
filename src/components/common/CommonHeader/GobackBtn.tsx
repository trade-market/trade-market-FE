import { useNavigate } from "react-router-dom";
import goback from "@Assets/Icons/Home/Goback.svg";

const GobackBtn = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(-1);
  }

  return (
    <button className="gobackBtn" onClick={onClickBtn}>
      <img src={goback} />
    </button>
  );
};

export default GobackBtn;