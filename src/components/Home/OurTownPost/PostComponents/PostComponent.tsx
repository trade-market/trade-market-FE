import React from 'react';
import styled from 'styled-components';
import ImgSection from './ImgSection';
import ContentSection from './ContentSection';
import SebSection from './SebSection';
import useModal from '@hooks/useModal';
import BottomSheet from '@components/common/BottomSheet';
import ConfirmModal from '@components/common/ConfirmModal';
import { useNavigate } from 'react-router-dom';

const ColorBlackMenu = styled.div`
  color: ${({ theme }) => theme.color.black};
`;

const ColorBlueMenu = styled.div`
  color: ${({ theme }) => theme.color.Mainblue};
`;

const DeletePost = styled.div`
  color: ${({ theme }) => theme.color.orange};
`;

interface IPostComponentProps {
  post: {
    id: string;
    type: number;
    image: string;
    title: string;
    want: string;
    category: string;
    like: boolean;
    location: string;
    date: string;
  };
  isOption?: boolean;
}

const PostComponent = ({ post, isOption = false }: IPostComponentProps) => {
  const navigate = useNavigate();
  const {
    isOpen: isOptionOpen,
    open: optionOpen,
    close: optionClose,
  } = useModal();
  const {
    isOpen: isPostStateOpen,
    open: postStateOpen,
    close: postStateClose,
  } = useModal();
  const {
    isOpen: isDeleteModalOpen,
    open: deleteModalOpen,
    close: deleteModalClose,
  } = useModal();

  const handleEditPost = () => {
    navigate(`/articles/${post.id}/edit/select-element`);
    console.log(post.id);
  };
  const handleChangeStatus = () => {
    optionClose();
    postStateOpen();
    console.log(post.id);
  };
  const handleDeletePost = () => {
    console.log(post.id);
  };
  const handleSale = () => {
    console.log(post.id);
  };
  const handleReservation = () => {
    console.log(post.id);
  };
  const handleSoldOut = () => {
    console.log(post.id);
  };

  return (
    <>
      <ImgSection type={post.type} image={post.image} />
      <ContentSection
        title={post.title}
        want={post.want}
        category={post.category}
      />
      <SebSection
        like={post.like}
        location={post.location}
        date={post.date}
        isOption={isOption}
        onOptionClick={optionOpen}
      />
      {isOptionOpen && (
        <BottomSheet height="250px" onClick={optionClose}>
          <ColorBlackMenu onClick={handleEditPost}>게시물 수정</ColorBlackMenu>
          <ColorBlackMenu onClick={handleChangeStatus}>
            상태 변경
          </ColorBlackMenu>
          <DeletePost
            onClick={() => {
              optionClose();
              deleteModalOpen();
            }}
          >
            삭제
          </DeletePost>
        </BottomSheet>
      )}
      {isPostStateOpen && (
        <BottomSheet height="250px" onClick={postStateClose}>
          <ColorBlackMenu onClick={handleSale}>판매중</ColorBlackMenu>
          <ColorBlackMenu onClick={handleReservation}>예약중</ColorBlackMenu>
          <ColorBlueMenu onClick={handleSoldOut}>판매완료</ColorBlueMenu>
        </BottomSheet>
      )}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="게시물 삭제"
        content="게시물을 삭제하시겠습니까?"
        confirmedContent="게시물이 삭제되었습니다."
        onConfirmAction={handleDeletePost}
        closeAction={deleteModalClose}
      />
    </>
  );
};

export default PostComponent;
