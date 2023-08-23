import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { size } from '@/styles/theme';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import Progressbar from '@components/WriteComment/Progressbar';
import BlueButton from '@/components/common/Buttons/BlueButton';

interface IInfoComponentProps {
  n: number;
  ProgessIcon: string;
  title: string;
  description1: string;
  description2?: string;
  placeholder?: string;
  maxWidth: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const InfoComponent = ({children, n, ProgessIcon, title, description1, description2, placeholder,  maxWidth = '175px', disabled}: IInfoComponentProps) => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };
  
  return (
    <>
      <CommonHeader />
      <Progressbar number={n} total={6} icon={ProgessIcon} />
      <Container>
        <Info>
          <div className="title">{title}</div>
          <div className="description">
            <span>{description1}</span>
            <span>{description2}</span>
            <Input
              type="text"
              placeholder={placeholder}
            />
          </div>
        </Info>
      </Container>
      {children}
      <ButtonsContainer>
        <BackButton
          onClick={handleBackButton}
        >이전</BackButton>
        <BlueButton
          maxWidth={maxWidth}
          disabled={disabled}
        >다음</BlueButton>
      </ButtonsContainer>
    </>
  );
};

export default InfoComponent;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 77px;
  padding: 0 20px 30px 20px;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  
  .title {
    font-weight: 600;
    text-align: center;
    font-size: ${({ theme }) => theme.font.size.large};
  }
  .description {
    color: ${({ theme }) => theme.color.lightGray};
    margin-top: 15px; 
    line-height: 18px;
    text-align: center;
    > span {
      display: block;
    }
  }
`;

export const Input = styled.input`
  width: 348px;
  height: 48px;
  padding: 16px;
  margin-top: 15px; 
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  font-size: ${({ theme }) => theme.font.size.small};
  background-color: ${({ theme }) => theme.color.inputGray};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  position: fixed;
  bottom: 48px;
  padding: 0 21px;
  align-items: center;
  z-index: 1;
  justify-content: space-around;
`;

export const BackButton = styled.button`
  width: 175px;
  padding: 15px 42px;
  border-radius: 8px;
  border: none;
  background-color: rgba(33, 86, 242, 0.08);
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: 600;
  color: ${({ theme }) => theme.color.Mainblue};
`;
