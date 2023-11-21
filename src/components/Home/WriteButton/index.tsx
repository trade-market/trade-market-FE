import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { size } from '@styles/theme';
import WriteButtonModal from '../WriteButtonModal';
import WriteBtn from '@Assets/Icons/Home/WriteBtn.svg';
import Active_WriteBtn from '@Assets/Icons/WritePost/Active_WriteBtn.svg';
import objectExchange_icon from '@Assets/Icons/WritePost/objectExchange_icon.svg';
import talentExchange_icon from '@Assets/Icons/WritePost/talentExchange_icon.svg';

const WriteButton = () => {
  const navigate = useNavigate();
  const [clickWriteButton, setClickWriteButton] = useState(false);

  const renderWriteButton = (label: string, icon: string, location: string) => (
    <div
      className="post-menu"
      onClick={() => {
        navigate(location);
        setClickWriteButton((prev) => !prev);
      }}
    >
      <div>{label}</div>
      <img className="menu-icon" src={icon} />
    </div>
  );

  return (
    <>
      {clickWriteButton ? (
        <WriteButtonModal>
          {renderWriteButton(
            '물물 교환하기',
            objectExchange_icon,
            `/write-post/object-trade`
          )}
          {renderWriteButton(
            '재능 교환하기',
            talentExchange_icon,
            `/write-post/talent-trade`
          )}
        </WriteButtonModal>
      ) : null}
      <BtnContainer>
        <img
          className="btn"
          src={clickWriteButton ? Active_WriteBtn : WriteBtn}
          onClick={() => setClickWriteButton((prev) => !prev)}
        />
      </BtnContainer>
    </>
  );
};

export default WriteButton;

const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size.mobile};
  justify-content: flex-end;
  padding: 0 15px;
  position: fixed;
  z-index: 120;
  bottom: 80px;

  .btn {
    width: 70px;
    height: 70px;
    z-index: 120;
    cursor: pointer;
    transition: all ease 0.7s;
  }
`;
