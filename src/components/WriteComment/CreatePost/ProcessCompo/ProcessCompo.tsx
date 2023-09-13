import { useNavigate, useParams } from 'react-router-dom';
import * as P from './ProcessCompoStyles';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import Progressbar from '@components/WriteComment/Progressbar';
import BottomBtnSection from '@/components/WriteComment/BottomBtnSection';
import ActionButton from '@/components/common/Buttons/ActionButton';
import BlueButton from '@components/common/Buttons/BlueButton';

interface IInfoComponentProps {
  children?: React.ReactNode;
  n: number;
  ProgessIcon: string;
  text: string[];
  disabled: boolean;
}

const ProcessCompo = ({
  children, n, ProgessIcon, text,  disabled }: IInfoComponentProps) => {
  const onButton = n === 2 || n === 6;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  //* 이전 버튼
  const handleBackButton = () => {
    navigate(-1);
  };
  
  //* 다음 버튼
  const handleNextButton = () => {
    let next = n + 1;
    if (n === 6) next = 6;
    navigate(`/articles/${id}/write-comment/create-post/${next}`);
  };

  //* close 버튼
  const handleCloseButton = () => {
    navigate(`/articles/${id}`);
  }

  return (
    <>
      <CommonHeader
        display={'flex'}
        closeClick={handleCloseButton}
      />
      <Progressbar number={n} total={6} icon={ProgessIcon} />
      {/*  */}
      <P.Container>
        <P.Info>
          <div className="title">{text[0]}</div>
          <div className="description">
            <span>{text[1]}</span>
            <span>{text[2]}</span>
          </div>
        </P.Info>
      </P.Container>
      {/*  */}
      {children}
      {/*  */}
      <BottomBtnSection>
        {!onButton ?
          <ActionButton onClick={handleBackButton}>이전</ActionButton>
            : null
          }
          <BlueButton
            maxWidth={'100%'}
            disabled={disabled}
            onClick={handleNextButton}
            >다음</BlueButton>
      </BottomBtnSection>
    </>
  );
};

export default ProcessCompo;