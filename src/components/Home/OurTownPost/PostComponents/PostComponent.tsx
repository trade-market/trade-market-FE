import styled from 'styled-components';
import ImgSection from './ImgSection';
import ContentSection from './ContentSection';
import SebSection from './SebSection';
import useModal from '@hooks/useModal';
import BottomSheet from '@components/common/BottomSheet';
import ConfirmModal from '@components/common/ConfirmModal';

const ColorBlackMenu = styled.div`
  color: ${({ theme }) => theme.color.black};
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
  const { isOpen, open, close } = useModal();
  const {
    isOpen: isDeleteModalOpen,
    open: deleteModalOpen,
    close: deleteModalClose,
  } = useModal();

  const handleEditPost = () => {
    console.log(post.id);
  };
  const handleChangeStatus = () => {
    console.log(post.id);
  };
  const handleDeletePost = () => {
    console.log(post.id);
    deleteModalClose();
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
        onOptionClick={open}
      />
      {isOpen && (
        <BottomSheet height="250px" onClick={close}>
          <ColorBlackMenu onClick={handleEditPost}>게시물 수정</ColorBlackMenu>
          <ColorBlackMenu onClick={handleChangeStatus}>
            상태 변경
          </ColorBlackMenu>
          <DeletePost
            onClick={() => {
              close();
              deleteModalOpen();
            }}
          >
            삭제
          </DeletePost>
        </BottomSheet>
      )}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="게시물 삭제"
        content="게시물을 삭제하시겠습니까?"
        confirmedContent="게시물이 삭제되었습니다."
        onFinalOkClick={handleDeletePost}
        closeAction={deleteModalClose}
      />
    </>
  );
};

export default PostComponent;
