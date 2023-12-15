import React from 'react';
import CommonHeader from '@components/common/CommonHeader/CommonHeader';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useModal from '@hooks/useModal';
import ImageBottomSheet from '@components/WritePost/MultiImageUpload/ImageBottomSheet';
import * as O from '@Pages/WritePost/WritePostType';

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
