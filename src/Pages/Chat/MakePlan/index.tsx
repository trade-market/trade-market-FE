import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import PostSection from '@/components/WritePost/PostSection';
import SelectBox from '@components/WritePost/SelectBox';
import PostBlueButtons from '@/components/WritePost/PostBlueButtons';

const MakePlan = () => {
  const navigate = useNavigate();
  const a = '';
  const b = '';

  const handleNextButtonClick = () => {
    console.log('오픈')
  }

  return (
    <>
      <CommonHeader>
        약속 잡기
      </CommonHeader>
      <Wrapper>
        <PostSection label={'약속 시간'}>
          <SelectBox
            placeholder={'약속 시간을 설정해주세요'}
            option={'MakePlan'}
            isChange={a !== b}
            // onClick={}
            />
        </PostSection>
        <PostSection label={'약속 전 알림 보내기'}>
          <SelectBox
            placeholder={'30분 전'}
            option={'AlertOptions'}
            isChange={a !== b}
            // onClick={}
            />
        </PostSection>
      </Wrapper>
      <PostBlueButtons
        option={1}
        disabled={true}
        BlueButtonName={'완료'}
        BlueButtonClickHandler={handleNextButtonClick}
      />
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

const SelectOptions = styled.ul<{ $open: boolean; $direction: string }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: ${({ $direction }) => $direction === 'down' ? '48px' : 'null'}; 
  bottom: ${({ $direction }) => $direction === 'down' ? 'null' : '49px'};
  overflow: hidden;
  overflow-y: ${({ $direction }) => $direction === 'down' ? 'scroll' : 'none'};
  width: 100%;
  height: 223px;
  max-height: ${({ $open }) => $open ? "none" : "0"};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.bgColor};
  color: ${({ theme }) => theme.color.lightGray};
  box-shadow:${({ $open, $direction }) => $open && $direction === 'down' ? "1px 3px 8px 2px rgba(152, 152, 152, 0.25);" : $open && !($direction === 'down') ? "1px -3px 8px 2px rgba(152, 152, 152, 0.25);" : "none" }; 
  z-index: 99;
`;