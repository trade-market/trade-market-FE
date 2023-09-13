import { size } from '@/styles/theme';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  position: fixed;
  bottom: 48px;
  padding: 0 21px;
  align-items: center;
  z-index: 99;
  gap: 8px;
`;

interface IBottomBtnSectionProps {
  children: React.ReactNode;
}

function BottomBtnSection({ children }: IBottomBtnSectionProps) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

export default BottomBtnSection;
