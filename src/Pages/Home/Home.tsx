import * as H from "./HomeStyles";
import Swiper from "./Swiper/Swiper";
import Exchange from "./Exchange/Exchange";
import WriteButton from "./WriteButton/WriteButton";

const Main = () => {
  return (
    <H.Wrapper>
      <Swiper />
      <Exchange />
      <WriteButton />
    </H.Wrapper>
  );
};

export default Main;