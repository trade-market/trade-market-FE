import { setAlarm } from '@/store/slices/ChatSlice';
import SelectBox from '@Pages/WritePost/WritePostcompo/SelectBox/SelectBox';
import CalendarModal from '@components/Chat/ChatRoom-Component/CalendarModal';
import PostBlueButtons from '@components/WritePost/_commons/PostBlueButtons/PostBlueButtons';
import PostSection from '@components/WritePost/_commons/PostSection/PostSection';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import useModal from '@hooks/useModal';
import { RootState } from '@store/types';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const MakePlan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isOpen, open, close } = useModal();
  const selectPlan = useSelector((state: RootState) => state.chat.planTime);
  const selectAlarm = useSelector((state: RootState) => state.chat.alarm);
  const initialTime = '약속 시간을 설정해주세요';
  const SelectTime = Object.values(selectPlan)
    .map((v, i) => (i === 0 ? format(new Date(v), `yyyy/MM/dd`) : v))
    .reduce((acc, cur, i) => {
      acc += (i === 3 ? `:` : ` `) + cur;
      return acc;
    })
    .toString();

  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.target as HTMLElement;
    dispatch(setAlarm(event.innerText));
  };

  const handleNextButtonClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Wrapper>
        {/* 헤더 */}
        <CommonHeader
          display={'flex'}
          visibleCloseButtonLeft={true}
          hiddenGoBack={true}
          closeClick={() => navigate(`/chat-list/${id}`)}
        >
          약속 잡기
        </CommonHeader>
        <PlanWrapper>
          {/* 캘린더 모달 */}
          <PostSection label={'약속 시간'}>
            <BoxContainer onClick={open}>
              <Label $change={SelectTime.includes('오')}>
                {selectPlan.ap ? SelectTime : initialTime}
              </Label>
            </BoxContainer>
          </PostSection>
          {/* 알람 셀렉박스 */}
          <PostSection label={'약속 전 알림 보내기'}>
            <SelectBox
              placeholder={selectAlarm}
              option={'alert'}
              isChange={true}
              onClick={handleOnChangeSelectValue}
              defaultActiveColor={true}
            />
          </PostSection>
        </PlanWrapper>
        {/* 완료버튼 */}
        <PostBlueButtons
          option={1}
          disabled={!selectPlan.date || !selectAlarm}
          BlueButtonName={'완료'}
          BlueButtonClickHandler={handleNextButtonClick}
        />
        {/* 캘린더 모달 오픈 */}
      </Wrapper>
      {isOpen && (
        <>
          <Background onClick={close} />
          <CalendarModal onClick={close} />
        </>
      )}
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
  width: 100%;
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
  color: ${({ theme }) => theme.color.gray};
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
  color: ${({ $change, theme }) =>
    $change ? theme.color.black : theme.color.gray};
`;
