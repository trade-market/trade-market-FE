import { useState } from 'react';
import styled from 'styled-components';
import useModal from '@hooks/useModal';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import BottomSheet from '@components/common/BottomSheet';

const ChatRoom = () => {
  const [saleState, setSaleState] = useState<string>('판매중');
  const { isOpen, open, close } = useModal();

  const handleChangeState = (e : React.MouseEvent<HTMLDivElement>) => {
    setSaleState(e.currentTarget.innerText)
    close();
  }
  

  return (
    <>
      <CommonHeader>
        <HeaderSection>
          <span className='title'>상대방 닉네임</span>
          <StateButton $saleState={saleState} onClick={open}>{saleState}</StateButton>
        </HeaderSection>
      </CommonHeader>

      {isOpen && (
        <BottomSheet height="250px" onClick={close}>
          <StateOption onClick={handleChangeState}>판매중</StateOption>
          <StateOption onClick={handleChangeState}>예약중</StateOption>
          <StateOptionComplete onClick={handleChangeState}>판매완료</StateOptionComplete>
        </BottomSheet>
      )}
    </>
  );
};

export default ChatRoom;


const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .title {
    justify-content: center;
  }
`;

const StateButton = styled.button<{ $saleState: string; }>`
  border: ${({ theme, $saleState }) =>
  $saleState === '예약중' ? `1px solid ${theme.color.orange}` : `none`};
  background-color: ${({ theme, $saleState }) =>
  $saleState === '판매중' ? theme.color.orange : $saleState === '판매완료' ? theme.color.whiteGray : 'transparent'};
  color: ${({ theme, $saleState }) =>
    $saleState === '판매중' ? theme.color.bgColor : $saleState === '판매완료' ? theme.color.lightGray : theme.color.orange};
  padding: 4px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.size.xSmall};
`;

const StateOption = styled.div``;
const StateOptionComplete = styled(StateOption)`
  color : ${({ theme }) => theme.color.activeBlue};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  margin-top: 60px;
`;