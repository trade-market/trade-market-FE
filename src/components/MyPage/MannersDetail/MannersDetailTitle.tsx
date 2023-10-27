import styled from 'styled-components';
import mannerIcon from '@Assets/Icons/MyPage/매너.svg';
import badMannerIcon from '@Assets/Icons/MyPage/비매너.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .title {
    font-size: 16px;
    font-weight: 600;
  }
`;

interface IMannersDetailTitleProps {
  isBadManner: boolean;
}

function MannersDetailTitle({ isBadManner }: IMannersDetailTitleProps) {
  return (
    <Container>
      {isBadManner ? (
        <img src={badMannerIcon} alt="비매너" />
      ) : (
        <img src={mannerIcon} alt="매너" />
      )}
      <span className="title">{`받은 ${
        isBadManner ? '비매너' : '매너'
      } 평가`}</span>
    </Container>
  );
}

export default MannersDetailTitle;
