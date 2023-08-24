import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { size } from '@/styles/theme';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import Progressbar from '@components/WriteComment/Progressbar';
import BlueButton from '@/components/common/Buttons/BlueButton';

interface IInfoComponentProps {
  children?: React.ReactNode;
  n: number;
  ProgessIcon: string;
  text: string[];
  inputRef?: React.RefObject<HTMLInputElement>;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled: boolean;
  price?: string[] | undefined;
}

const InfoComponent = ({
  children, n, ProgessIcon, text, inputRef, handleSearch, placeholder='', disabled, price }: IInfoComponentProps) => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <>
      <CommonHeader />
      <Progressbar number={n} total={6} icon={ProgessIcon} />
      {/*  */}
      <Container>
        <Info>
          <div className="title">{text[0]}</div>
          <div className="description">
            <span>{text[1]}</span>
            <span>{text[2]}</span>
            <Input
              type={n === 3 || n == 4 ?"text" : "hidden"}
              placeholder={placeholder}
              ref={inputRef}
              onChange={handleSearch}
              disabled={n === 4}
              value={n === 4 ? price[0]+price[1]+price[2] : null}
              className={n === 4 ? 'price-input' : ''}
            />
            {n === 4 ? <div className="currency">원</div> : null}
          </div>
        </Info>
      </Container>
      {/*  */}
      {children}
      {/*  */}
      <ButtonsContainer>
        {n !== 2 ? (
        <BackButton
          onClick={handleBackButton}
          >이전</BackButton>
        ) : (<></>)
        }
          <BlueButton
            maxWidth={n === 2 ? '100%' : '175px'}
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
  padding: 0 20px 20px 20px;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  position: relative;
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
  .currency {
    position: absolute;
    left: 87%;
    top: 75%;
    font-size: 15px;
    color: ${({ theme }) => theme.color.lightGray};
  }
`;

export const Input = styled.input`
  width: 348px; //330
  height: 48px;
  padding: 16px;
  margin-top: 15px; 
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.whiteGray};
  font-family: ${({ theme }) => theme.font.family.Pretendard};
  font-size: ${({ theme }) => theme.font.size.small};
  background-color: ${({ theme }) => theme.color.inputGray};
  justify-content: center;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
  &.price-input {
    text-align: center;
    color : ${({ theme }) => theme.color.activeBlue};
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.size.base};
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
