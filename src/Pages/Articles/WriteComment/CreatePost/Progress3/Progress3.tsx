import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import InfoComponent from '../InfoComponent';
import * as W from "./Progresss3Styles";
import category from '@Assets/offer/Write-comment/[Progress]category.svg';

const Progress3 = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // const isGetimage = Object.keys(isCreatePost).includes('image');

  const handleClickNextProgress = () => {
    navigate(`/articles/${id}/write-comment/create-post/3`)
  };

  return (
    <>
      <InfoComponent
        n={3}
        ProgessIcon={category}
        title={"희망 물품 및 카테고리 선정"}
        description1={"거래를 원하시는 물품을 작성하시고,"}
        description2={"물품이 해당하는 카테고리를 선택해주세요."}
        placeholder={'물품 작성'}
        disabled={true}
      />
    </>
  );
};

export default Progress3;
