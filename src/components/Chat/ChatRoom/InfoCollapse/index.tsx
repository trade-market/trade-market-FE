import { useState } from 'react';
import styled from 'styled-components';
import Category from '@components/WritePost/Category';
import MakePlanButtons from '../MakePlanButtons';
import sample_sale_image from '@Assets/Icons/Chat/sample_sale_image.svg';
import up_arrow from '@Assets/Icons/Chat/up_arrow.svg';
import down_arrow from '@Assets/Icons/Chat/down_arrow.svg';

const InfoCollapse = () => {
  const [isPlans, setIsPlans] = useState([]);
  const [closeCollapse, setCloseCollapse] = useState(false);

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
        <MakePlanButtons
          isPlans={false}
          onClick={() => console.log('make 약속')}
          maxWidth={'100%'}
        >약속 잡기</MakePlanButtons>
    </Wrapper>
    <UpArrow onClick={() => setCloseCollapse(prev => !prev)}>
      <img src={closeCollapse ? up_arrow : down_arrow}/>
    </UpArrow>
    </>
  );
};

export default InfoCollapse;

const Wrapper = styled.div<{$closeCollapse : boolean}>`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  max-height: ${({ $closeCollapse }) => $closeCollapse ? "none" : "0"};
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

const UpArrow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 0.3px solid ${({ theme }) => theme.color.gray};
  > img {
    cursor: pointer;
  }
`;