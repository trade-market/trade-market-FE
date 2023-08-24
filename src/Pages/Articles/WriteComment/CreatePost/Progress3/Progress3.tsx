import { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import InfoComponent from '../InfoComponent';
import * as P from "./Progresss3Styles";
import category from '@Assets/offer/Write-comment/[Progress]category.svg';

const Progress3 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const categories = ['전자기기', '생활가전', '가구', '식품', '생활/주방', '도서', '의류', '미용/뷰티', '스포츠/레저', '취미', '중고차', '티켓'];
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isCreatePost, setIsCreatePost] = useState({});
  // const setNext = Object.keys(isCreatePost).includes('category');
  // const ssetNext = ['product', 'category'].some(v => Object.keys(isCreatePost).includes(v));

  //* input 입력
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCreatePost({
      ...isCreatePost,
      product : e.target.value
    });
  };

  //* 카테고리 select
  const handleSelectCategory = (e: React.MouseEvent<HTMLButtonElement | null>) => {
    handleChangeCategory();
    e.currentTarget.className = 'active';
    setIsCreatePost({
          ...isCreatePost,
        category : e.currentTarget.innerText
      });
  };

  //* 카테고리 하나만 선택
  const handleChangeCategory = () => {
    const actives = document.querySelectorAll('.active');
    actives.forEach(c => c.classList.remove('active'))
  }

    //* 첫 rending시 input에 fucusing
  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, [isCreatePost?.product]);

  return (
    <>
      <InfoComponent
        n={3}
        ProgessIcon={category}
        text={["희망 물품 및 카테고리 선정", "거래를 원하시는 물품을 작성하시고,", "물품이 해당하는 카테고리를 선택해주세요."]}
        inputRef={inputRef}
        placeholder={'물품 작성'}
        handleSearch={handleSearch}
        disabled={true}
        />
        <P.Container>
          <P.Line />
          <P.Categories>
            {
              categories.map((c, i) => {
                return (
                  <button className="category" key={i} onClick={handleSelectCategory}>{c}</button>
                )
              })
            }
            </P.Categories>
        </P.Container>
    </>
  );
};

export default Progress3;
