import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import InfoComponent from '../InfoComponent';
import * as P from "./Progresss3Styles";
import category from '@Assets/offer/Write-comment/[Progress]category.svg';

const Progress3 = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // const isGetimage = Object.keys(isCreatePost).includes('image');

  // const handleClickNextProgress = () => {
  //   navigate(`/articles/${id}/write-comment/create-post/3`)
  // };

  const categories = ['전자기기', '생활가전', '가구', '식품', '생활/주방', '도서', '의류', '미용/뷰티', '스포츠/레저', '취미', '중고차', '티켓'];

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
        <P.Container>
          <P.Line />
        <P.Categories>
          {
            categories.map((c, i) => {
              return (
                <div key={i}>{c}</div>
              )
            })
          }
          </P.Categories>
        </P.Container>
    </>
  );
};

export default Progress3;
