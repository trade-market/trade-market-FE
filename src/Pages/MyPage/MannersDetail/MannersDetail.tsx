import styled from 'styled-components';
import {
  badMannerDumyData,
  mannerDumyData,
} from '@components/MyPage/Manners/MannerTypeList';
import MannersDetailContainer from '@components/MyPage/MannersDetail/MannersDetailContainer';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import DividedLine from '@components/common/DividedLine';

const Container = styled.div`
  padding-top: 60px;
`;

function MannersDetail() {
  return (
    <>
      <CommonHeader>매너 상세</CommonHeader>
      <Container>
        <MannersDetailContainer mannerType="매너" data={mannerDumyData} />
        <DividedLine />
        <MannersDetailContainer mannerType="비매너" data={badMannerDumyData} />
      </Container>
    </>
  );
}

export default MannersDetail;
