import { useEffect } from 'react';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import { PostContainer } from '@components/Home/OurTownPost/OurTownPostStyles';
import PostComponent from '@components/Home/OurTownPost/PostComponents/PostComponent';
import { Data } from '@components/Home/OurTownPost/DumyData';
import useQueryString from '@hooks/useQueryString';

const Container = styled.div`
  padding-top: 60px;
`;

function ExchangeHistory() {
  const type = useQueryString('type');

  let title = '';
  switch (type) {
    case 'item-exchanging':
      title = '물물교환중';
      break;
    case 'skill-exchanging':
      title = '재능교환중';
      break;
    case 'exchange-history':
      title = '교환 내역';
      break;
    case 'all-exchanges':
      title = '교환 전체보기';
      break;
    default:
      console.error('Invalid type');
  }

  useEffect(() => {
    let apiEndpoint = '';
    switch (type) {
      case 'item-exchanging':
        apiEndpoint = '/api/item-exchanging';
        break;
      case 'skill-exchanging':
        apiEndpoint = '/api/skill-exchanging';
        break;
      case 'exchange-history':
        apiEndpoint = '/api/exchange-history';
        break;
      case 'all-exchanges':
        apiEndpoint = '/api/all-exchanges';
        break;
      default:
        console.error('Invalid type');
    }

    //Todo: 교환내역 api로 받아오기
  }, [type]);

  return (
    <>
      <CommonHeader>{title}</CommonHeader>
      <Container>
        {Data.map((post) => {
          return (
            <PostContainer key={post.id}>
              <PostComponent post={post} isOption={true} />
            </PostContainer>
          );
        })}
      </Container>
    </>
  );
}

export default ExchangeHistory;
