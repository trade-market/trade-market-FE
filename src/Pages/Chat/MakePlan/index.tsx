import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useModal from '@hooks/useModal';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import PostSection from '@/components/WritePost/PostSection';
import SelectBox from '@components/WritePost/SelectBox';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';
import CalendarModal from '@components/Chat/ChatRoom/CalendarModal';
import { useState } from 'react';

const MakePlan = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const a = '';
  const b = '';

  const handleNextButtonClick = () => {
    console.log('오픈')
  }
  
  const handleOnChangeSelectValue = (() => {
    return (e: React.MouseEvent<HTMLElement>) => {
    const event = e.target as HTMLElement;
      console.log(event.innerText);
    }
  });

  return (
    <>
      <CommonHeader>
        약속 잡기
      </CommonHeader>
      <Wrapper>
        <PostSection label={'약속 시간'}>
          <BoxContainer onClick={() => setModalOpen((prev) => !prev)}>
            <Label $change={a !== b}>{'약속 시간을 설정해주세요'}</Label>
            </BoxContainer>
        </PostSection>
        <PostSection label={'약속 전 알림 보내기'}>
          <SelectBox
            placeholder={'30분 전'}
            option={'AlertOptions'}
            isChange={a !== b}
            onClick={handleOnChangeSelectValue}
            />
        </PostSection>
      </Wrapper>
      <PostBlueButtons
        option={1}
        disabled={true}
        BlueButtonName={'완료'}
        BlueButtonClickHandler={handleNextButtonClick}
        />
        {modalOpen && <CalendarModal />}
    </>
  );
};

export default MakePlan;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  margin-top: 60px;
  padding: 0 20px;
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
  color : ${({ $change, theme }) => $change ? theme.color.activeBlue : theme.color.gray};
`;