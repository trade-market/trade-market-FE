import styled from 'styled-components';
import MannerTitle from './MannerTitle';
import MannerTypeList from './MannerTypeList';

const Container = styled.div`
  width: 100%;
  padding: 0 21px;
  margin-top: 20px;
  &:not(:last-child) {
    margin: 20px 0;
  }
`;

interface IMannersContainerProps {
  mannerType: '매너' | '비매너';
}

function MannersContainer({ mannerType }: IMannersContainerProps) {
  return (
    <Container>
      <MannerTitle text={`받은 ${mannerType} 평가`} />
      {/* API명세에 따른 매너, 비매너 판별 필요 */}
      <MannerTypeList isBadManner={mannerType === '비매너' ? true : false} />
    </Container>
  );
}

export default MannersContainer;
