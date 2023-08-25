import styled from 'styled-components';
import { ContainerTemplet } from '@Pages/Articles/WriteComment/CreatePost/Progress2/Progresss2Styles';

export const Container = styled(ContainerTemplet)`
  margin-top: 15px;
`;

const Slide = styled.div`
  border-radius: 12px;
  height: 8px;
`;

export const PriceSlide = styled(Slide)`
  position: relative;
  width: 348px;
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
    height: 24px;
    width: 24px;
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
  padding: 0 35px 0 35px;
  justify-content: space-between;
  color : ${({ theme }) => theme.color.activeBlue};
  font-size: ${({ theme }) => theme.font.size.small};
  > div {
    display: flex;
    width: 100%;
  }
  :nth-child(2) {
    justify-content: flex-end;
  }
`;