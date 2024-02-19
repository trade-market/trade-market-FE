import * as O from '@Pages/WritePost/01-PostOutlet/styles';
import ImageBottomSheet from '@components/WritePost/03-SelectPostOptions/ImageBottomSheet/ImageBottomSheet';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import useModal from '@hooks/useModal';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IPostOutletProps {
  title: string;
  tradeType?: string;
}

const PostOutlet = ({ title, tradeType }: IPostOutletProps) => {
  const navigate = useNavigate();
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Wrapper>
        <CommonHeader display={'flex'} closeClick={() => navigate(`/`)}>
          {title}
        </CommonHeader>
        {!window.location.pathname.includes('final-check') ? (
          <O.PostType>{tradeType}</O.PostType>
        ) : null}
      </Wrapper>
      <Outlet context={{ open }} />
      {isOpen && <ImageBottomSheet close={close} />}
    </>
  );
};

export default PostOutlet;

const Wrapper = styled.div`
  display: flex;
`;
