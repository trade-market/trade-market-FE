import { useDispatch, useSelector } from 'react-redux';
import { setAlarm } from '@/store/slices/ChatSlice';
import { RootState } from '@store/types';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from "date-fns";
import styled from 'styled-components';
import useModal from '@hooks/useModal';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import PostSection from '@/components/WritePost/PostSection';
import SelectBox from '@components/WritePost/SelectBox';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';
import CalendarModal from '@components/Chat/ChatRoom/CalendarModal';

const MakePlan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isOpen, open, close } = useModal();
  const selectPlan = useSelector((state: RootState) => state.chat.planTime);
  const selectAlarm = useSelector((state: RootState) => state.chat.alarm);
  const initialTime = '약속 시간을 설정해주세요';
  const SelectTime = Object.values(selectPlan)
    .map((v,i) => i === 0 ? format(new Date(v),`yyyy/MM/dd`) : v)
    .reduce((acc, cur, i) => {
      acc += ( i === 3 ? `:`  : ` `) + cur;
      return acc;
    }).toString();
  
  const handleOnChangeSelectValue = ((e: React.MouseEvent<HTMLElement>) => {
    const event = e.target as HTMLElement;
    dispatch(setAlarm(event.innerText))
  });
    
  const handleNextButtonClick = () => {
    navigate(-1);
  }

  return (
    <>
      <Wrapper>
        <CommonHeader
          display={'flex'}
          visibleCloseButtonLeft={true}
          hiddenGoBack={true}
          closeClick={() => navigate(`/chat-list/${id}`)}
        >약속 잡기
        </CommonHeader>
        <PlanWrapper>
          <PostSection label={'약속 시간'}>
            <BoxContainer onClick={open}>
              <Label $change={SelectTime.includes('오')}>
                {selectPlan.ap ? SelectTime : initialTime}
              </Label>
              </BoxContainer>
          </PostSection>
          <PostSection label={'약속 전 알림 보내기'}>
            <SelectBox
              placeholder={selectAlarm}
              option={'AlertOptions'}
              isChange={true}
              onClick={handleOnChangeSelectValue}
              defaultActiveColor={true}
              />
          </PostSection>
        </PlanWrapper>
        <PostBlueButtons
          option={1}
          disabled={(!selectPlan.date) || (!selectAlarm)}
          BlueButtonName={'완료'}
          BlueButtonClickHandler={handleNextButtonClick}
          />
        </Wrapper>
        {isOpen &&
          <>
            <Background onClick={close} />
            <CalendarModal onClick={close} />
          </>
        }
    </>
  );
};

export default MakePlan;

const Wrapper = styled.div`
  display: flex;
`;

export const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  margin-top: 60px;
  padding: 0 20px;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 70;
  transition: transform 650ms ease-out;
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 378px;
  width: 100%;
  height: 48px;
  padding-left: 15px;
  margin-top: 15px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.bgColor};
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  color : ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.font.size.base};
  cursor: pointer;
  background: url('/down.svg') right no-repeat;

  &::before {
    position: absolute;
    top: 7px;
    right: 15px;
    color: ${({ theme }) => theme.color.lightGray};
    font-size: 22px;
  }
`;

const Label = styled.label<{ $change: boolean }>`
  display: flex;
  color : ${({ $change, theme }) => $change ? theme.color.black : theme.color.gray};
`;