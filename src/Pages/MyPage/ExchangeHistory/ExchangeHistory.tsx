import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import { PostContainer } from '@components/Home/OurTownPost/OurTownPostStyles';
import PostComponent from '@components/Home/OurTownPost/PostComponents/PostComponent';
import { Data } from '@components/Home/OurTownPost/DumyData';
import useModal from '@hooks/useModal';
import BottomSheet from '@components/common/BottomSheet';
import useQuerystring from '@hooks/useQuerystring';

const Container = styled.div`
  padding-top: 60px;
`;

const EditPost = styled.div``;

const ChangeStatus = styled.div``;

const DeletePost = styled.div`
  color: ${({ theme }) => theme.color.orange};
`;

function ExchangeHistory() {
  const type = useQuerystring('type');
  const { isOpen, open, close } = useModal();
  const [selectedPostId, setSelectedPostId] = useState('');

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

  const handleOpen = (id: string) => {
    setSelectedPostId(id);
    open();
  };

  const handleEditPost = () => {
    console.log(selectedPostId);
  };
  const handleChangeStatus = () => {
    console.log(selectedPostId);
  };
  const handleDeletePost = () => {
    console.log(selectedPostId);
  };

  return (
    <>
      <CommonHeader>{title}</CommonHeader>
      <Container>
        {Data.map((post) => {
          return (
            <PostContainer key={post.id}>
              <PostComponent
                post={post}
                isOption={true}
                onOptionClick={() => handleOpen(post.id)}
              />
            </PostContainer>
          );
        })}
      </Container>
      {isOpen && (
        <BottomSheet height="250px" onClick={close}>
          <EditPost onClick={handleEditPost}>게시물 수정</EditPost>
          <ChangeStatus onClick={handleChangeStatus}>상태 변경</ChangeStatus>
          <DeletePost onClick={handleDeletePost}>삭제</DeletePost>
        </BottomSheet>
      )}
    </>
  );
}

export default ExchangeHistory;
