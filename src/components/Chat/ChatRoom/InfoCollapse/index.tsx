import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPlanTime } from '@/store/slices/ChatSlice';
import { RootState } from '@store/types';
import { format } from "date-fns";
import styled from 'styled-components';
import Category from '@components/WritePost/Category';
import MakePlanButtons from '../MakePlanButtons';
import sample_sale_image from '@Assets/Icons/Chat/sample_sale_image.svg';
import up_arrow from '@Assets/Icons/Chat/up_arrow.svg';
import { size } from '@/styles/theme';

interface IInfoCollapseProps {
  setSaleState: React.Dispatch<React.SetStateAction<string>>;
}

const InfoCollapse = ({ setSaleState }: IInfoCollapseProps) => {
  const dispatch = useDispatch();
  const selectPlanTime = useSelector((state: RootState) => state.chat.planTime);
  const deadline = format(new Date(selectPlanTime), `yy년 MM월 dd일`);
  const [closeCollapse, setCloseCollapse] = useState(false);
  const navigate = useNavigate();
  const today = new Date();
  // todo : '판매중' -> 약속 잡기를 통해 약속 날짜를 잡으면 '예약중'으로 상태 변경 -> 오늘 날짜가 예약 날짜를 넘을 시 '판매완료'로 상태 변경
  // todo : 잡은 약속이 없다면 : 약속 잡기 -> 잡은 약속이 있다면 : 변경하기 -> 잡은 약속이 지났다면 : 평가하기

  console.log(selectPlanTime)

  return (
    <>
    <Wrapper $closeCollapse={closeCollapse}>
      <Container>
        <img src={sample_sale_image} />
        <InfoContainer>
          <div>선글라스</div>
          <div>21,000~24,000원</div>
          <Category
            provide={'의류'}
            exchange={'의류'}
          />
        </InfoContainer>
      </Container>
        <ButtonContainer>
        { !selectPlanTime ?
            <MakePlanButtons onClick={() => navigate('make-plan')}>약속 잡기</MakePlanButtons> 
            : <>
                <MakePlanButtons
                  $bgColor='whiteLightGray' $color='activeBlue' $isBlock={true}>{deadline}</MakePlanButtons>
                <MakePlanButtons onClick={() => navigate('make-plan')}>변경하기</MakePlanButtons> 
              </>
        }
          
        </ButtonContainer>
    </Wrapper>
    <UpArrow $closeCollapse={closeCollapse} onClick={() => setCloseCollapse(prev => !prev)}>
        <img src={up_arrow}/>
    </UpArrow>
    </>
  );
};

export default InfoCollapse;

const Wrapper = styled.div<{$closeCollapse : boolean}>`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  max-height: ${({ $closeCollapse }) => $closeCollapse ? "0" : "none"};
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  padding-bottom: 15px;
`;

const InfoContainer = styled(Container)`
  flex-direction: column;
  padding: 2px 12px;
  font-size: ${({ theme }) => theme.font.size.small};
  font-weight: 500;
  justify-content: space-between;
  :nth-child(2) {
    color: ${({ theme }) => theme.color.activeBlue};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  align-items: center;
  gap: 8px;
`;

const UpArrow = styled.div<{$closeCollapse : boolean}>`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 0.3px solid ${({ theme }) => theme.color.gray};
  padding: 3px;
  > img {
    cursor: pointer;
    transform: ${({ $closeCollapse }) => $closeCollapse ? `scaleY(-1)` : ``}; 
  }
`;