import { useEffect } from 'react';
import * as H from './HomeStyles';
import SwiperBanner from '@components/Home/Swiper/SwiperBanner';
import ExchangeMenu from '@components/Home/Exchange/ExchangeMenu/ExchangeMenu';
import OurTownPost from '@components/Home/OurTownPost/OurTownPost';
import WriteButton from '@components/Home/WriteButton';
import useQueryString from '@hooks/useQueryString';
import CommonModal from '@components/common/CommonModal';
import useModal from '@hooks/useModal';

const Main = () => {
  const { isOpen, open, close } = useModal();
  const query = useQueryString('action');

  useEffect(() => {
    if (query === 'logout') {
      open();
    }
  }, [query]);
  return (
    <>
      <H.Wrapper>
        <SwiperBanner />
        <ExchangeMenu />
        <OurTownPost />
        <WriteButton />
      </H.Wrapper>
      <CommonModal
        isOpen={isOpen}
        title="로그아웃 되었습니다."
        closeAction={close}
      />
    </>
  );
};

export default Main;
