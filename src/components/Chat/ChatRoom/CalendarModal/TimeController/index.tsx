import styled from 'styled-components';
import { useEffect, useState } from 'react';
import VerticalSwiper from './VerticalSwiper';

interface ITimeControllerProps {
  plans: {
    date: Date;
    ap: string;
    hour: number;
    minute: number;
  };
  setPlans: React.Dispatch<
    React.SetStateAction<{
      date: Date;
      ap: string;
      hour: number;
      minute: number;
    }>
  >;
  isOpen: boolean;
  closeAction: () => void;
}

const TimeController = ({
  plans,
  setPlans,
  isOpen,
  closeAction,
}: ITimeControllerProps) => {
  const [time, setTime] = useState({
    ap: '',
    hour: 0,
    minute: 0,
  });
  const TIME_AP = ['오전', '오후'];
  const TIME_HOURS = Array.from(Array(12).keys()).map((_, i) => i + 1);
  const TIME_MINUTES = Array(12)
    .fill(0)
    .map((_, i) => i * 5)
    .map((x) => (x < 10 ? '0' + x : x));

  const renderSwiper = (arr: string[] | (string | number)[], key: string) => (
    <VerticalSwiper
      TimeData={arr}
      onSlideChange={(swiper) =>
        setTime((prev) => {
          return { ...prev, [key]: arr[swiper.realIndex] };
        })
      }
    />
  );

  const handleSetUPTimeClick = () => {
    setPlans({ ...plans, ap: time.ap, hour: time.hour, minute: time.minute });
    closeAction();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <ModalWrapper>
        <div className="title">시간</div>
        <SwiperWrapper>
          {renderSwiper(TIME_AP, 'ap')}
          {renderSwiper(TIME_HOURS, 'hour')}
          {renderSwiper(TIME_MINUTES, 'minute')}
          <div className="vizor"></div>
        </SwiperWrapper>
        <ButtonWrapper>
          <button className="close-btn" onClick={closeAction}>
            취소
          </button>
          <button className="ok-btn" onClick={handleSetUPTimeClick}>
            확인
          </button>
        </ButtonWrapper>
      </ModalWrapper>
    </>
  );
};

export default TimeController;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 320px;
  width: 100%;
  height: 300px;
  z-index: 999;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.bgColor};
  box-shadow: 0px 0px 12px 0px rgba(33, 86, 242, 0.1);

  .title {
    font-size: ${({ theme }) => theme.font.size.medium};
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.whiteGray};
    padding: 20px 0;
    text-align: center;
    font-weight: 600;
  }
`;

const SwiperWrapper = styled.div`
  display: flex;
  height: 100%;
  max-height: 190px;
  padding: 15px 40px 0px 40px;
  text-align: center;
  .swiper-slide {
    font-weight: 400;
    color: ${({ theme }) => theme.color.lightGray};
    font-size: ${({ theme }) => theme.font.size.medium};
    .Active {
      color: ${({ theme }) => theme.color.black};
    }
  }

  .vizor {
    position: absolute;
    height: 32px;
    top: 50%;
    left: 8px;
    right: 8px;
    transform: translateY(-50%);
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.lightBlue};
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  button {
    font-size: ${({ theme }) => theme.font.size.medium};
    width: 50%;
    border: none;
    padding: 18px;
  }
  .close-btn {
    border-bottom-left-radius: 8px;
  }
  .ok-btn {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.Mainblue};
    border-bottom-right-radius: 8px;
  }
`;
