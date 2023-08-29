import { useRef, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/types';
import { setProductPost, setCategoryPost } from '@/store/slices/CreatePostSlice';
import ProcessCompo from '@components/WriteComment/CreatePost/ProcessCompo/ProcessCompo';
import * as P from "./Progresss3Styles";
import category from '@Assets/offer/Write-comment/[Progress]category.svg';

const Progress3 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const categories = ['전자기기', '생활가전', '가구', '식품', '생활/주방', '도서', '의류', '미용/뷰티', '스포츠/레저', '취미', '중고차', '티켓'];
  const selectProduct = useSelector((state: RootState) => state.createPost.product);
  const selectCategory = useSelector((state: RootState) => state.createPost.category);

  //* input 입력
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductPost(e.target.value))
  };

  // //* 카테고리 select
  const handleSelectCategory = (index: number) => {
    const newCategories = Array(categories.length).fill(false);
    newCategories[index] = true;
    dispatch(setCategoryPost(categories[index]));
  };

    //* 첫 rending시 input에 focusing
  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  return (
    <>
      <ProcessCompo
        n={3}
        ProgessIcon={category}
        text={["희망 물품 및 카테고리 선정", "거래를 원하시는 물품을 작성하시고,", "물품이 해당하는 카테고리를 선택해주세요."]}
        inputRef={inputRef}
        placeholder={'물품 작성'}
        handleSearch={handleSearch}
        disabled={!(selectProduct.length > 0) || !(selectCategory.length > 0)}
        value={selectProduct}
        />
        <P.Container>
          <P.Line />
          <P.Categories>
            {
              categories.map((c, i) => {
                return (
                  <button
                    key={i}
                    className={selectCategory === categories[i] ? 'active ' : ''}
                    onClick={() => handleSelectCategory(i)}>{c}</button>
                )
              })
            }
            </P.Categories>
        </P.Container>
    </>
  );
};

export default Progress3;
