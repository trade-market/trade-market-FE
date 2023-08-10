import * as H from "./HomeStyles";
import Swiper from "./Swiper/Swiper";
import ExchangeMenu from "./Exchange/ExchangeMenu/ExchangeMenu";
import WriteButton from "./WriteButton/WriteButton";

const Main = () => {
  return (
    <H.Wrapper>
      <Swiper />
      <ExchangeMenu />
      
      <WriteButton />
    </H.Wrapper>
  );
};

export default Main;