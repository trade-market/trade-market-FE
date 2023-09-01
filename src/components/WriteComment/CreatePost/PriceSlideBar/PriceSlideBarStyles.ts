import styled from 'styled-components';

export const InputContainerTemplet = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const InputTemplet = styled.input`
  display: flex;
  text-align: center;
  justify-content: center;
  max-width: 378px;
  width: 100%;
  height: 48px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  background-color: ${({ theme }) => theme.color.inputGray};
  justify-content: center;
`;

export const InputContainer = styled(InputContainerTemplet)`
  .currency {
    position: absolute;
    left: 86%;
    top: 22%;
    font-size: 15px;
    color: ${({ theme }) => theme.color.lightGray};
  }
`;

export const Input = styled(InputTemplet)`
  font-size: ${({ theme }) => theme.font.size.base};
  color : ${({ theme }) => theme.color.activeBlue};
  font-weight: 600;
  margin-bottom: 25px;
`;

export const PriceSlideContainer = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const Slide = styled.div`
  border-radius: 12px;
  height: 8px;
`;

export const PriceSlide = styled(Slide)`
  position: relative;
  max-width: 378px;
  width: 100%;
  background-color: #F2F2F2;
`;

export const PriceSlideBarInner = styled(Slide) <{ $left: number; $right: number }>`
  position: absolute;
  left: ${props => props.$left}%;
  right: ${props => props.$right}%;
  background-color: ${({ theme }) => theme.color.activeBlue};
`;

export const PriceRangeWrap = styled.div`
  position: relative;
`;

export const PriceRangeMin = styled.input`
  position: absolute;	
	top: -2px;
  left: -8px;
  width: 102%;
  height: 8px;
  background: none;
  -webkit-appearance: none;
  pointer-events: none; // input-pointer 비활성화

  &::-webkit-slider-thumb {
    height: 22px;
    width: 22px;
    border-radius: 50%;
    -webkit-box-shadow: 0.5px 0.5px 3px 0.5px ${({ theme }) => theme.color.gray};
    background-color: ${({ theme }) => theme.color.white};
    -webkit-appearance: none;
    pointer-events: auto; // 버튼 자체를 활성화
  }
`;

export const PriceRangeMax = styled(PriceRangeMin)``;

export const PriceTag = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  justify-content: space-between;
  color : ${({ theme }) => theme.color.activeBlue};
  font-size: ${({ theme }) => theme.font.size.small};
  position: relative; 
`;