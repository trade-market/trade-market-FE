import * as H from "./HomeStyles";
import SwiperBanner from "./Swiper/SwiperBanner";
import ExchangeMenu from "./Exchange/ExchangeMenu/ExchangeMenu";
import WriteButton from "./WriteButton/WriteButton";

const Main = () => {
  return (
    <H.Wrapper>
      <SwiperBanner />
      <ExchangeMenu />
      
      <WriteButton />
    </H.Wrapper>
  );
};

export default Main;