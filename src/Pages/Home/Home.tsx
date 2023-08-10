import * as H from "./HomeStyles";
import SwiperBanner from "./Swiper/SwiperBanner";
import ExchangeMenu from "./Exchange/ExchangeMenu/ExchangeMenu";
import WriteButton from "./WriteButton/WriteButton";
import OurTownPost from "./OurTownPost/OurTownPost";

const Main = () => {
  return (
    <H.Wrapper>
      <SwiperBanner />
      <ExchangeMenu />
      <OurTownPost />
      <WriteButton />
    </H.Wrapper>
  );
};

export default Main;